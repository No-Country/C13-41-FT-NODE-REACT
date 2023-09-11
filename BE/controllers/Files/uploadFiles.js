const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { editPatient } = require("../Patient/editPatient");
const { editMedic } = require("../Medic/editMedic");
const { editConsult } = require("../Consult/editConsult");

const mainFolder = 'public/uploads'

const main = ['public/uploads/', 'public/uploads/avatarpatient', 'public/uploads/avatarmedic', 'public/uploads/consult']


if (!fs.existsSync(path.join(`${mainFolder}`))) {

  main.forEach(item => {
    fs.mkdirSync(path.join(`${item}`), { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating folder:', err);
      } 
    });
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const typeFolder = `${mainFolder}/${req.query.type}`

    cb(null, typeFolder);
  },
  filename: (req, file, cb) => {
    
    const timestamp = Date.now();
    const fileExtension = path.extname(file.originalname);
    const fileName = `${timestamp}${fileExtension}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const fileExtension = path.extname(file.originalname).toLowerCase();
  const allowedImageExtensions = ['.png', '.jpeg', '.jpg'];
  const allowedConsultExtensions = ['.pdf', ...allowedImageExtensions];
  
  const allowedExtensions = req.query.type === 'consult' ? allowedConsultExtensions : allowedImageExtensions;

  if (allowedExtensions.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false); 
  }
};

const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, //20MB MAX
  fileFilter
});

const uploadFilesMiddleware = upload.single('file'); 

const uploadFilesResponse = async (req, res, next) => {
  try {
    //Type: id or email
    const { type } = req.query

    if(!type)
    {
      return res.status(400).json({ message: 'Is lacking type field' })
    }

    switch(type)
    {
      case 'consult':
      {
        const request = { ...req, body: {id: req.query.id, urlFile: req.file.filename } };
          
        await editConsult(request,  res);
        
        break;       
      }        
      default:
      {
        const request = { ...req, body: {email: req.query.email, avatar: req.file.filename} };
          
        await type === 'avatarpatient' ? editPatient(request,  res) : editMedic(request,  res);
      
        break;  
      }
    }    
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Upload fail" });
  }
  
};

exports.uploadFilesMiddleware = uploadFilesMiddleware;
exports.uploadFilesResponse = uploadFilesResponse;
