const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const fileExtension = path.extname(file.originalname);
    const fileName = `${timestamp}${fileExtension}`;
    cb(null, fileName);
  },
});

const upload = multer({ 
  storage,
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB limit
});

const uploadFilesMiddleware = upload.single('file'); 

const uploadFilesResponse = (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' });
};

exports.uploadFilesMiddleware = uploadFilesMiddleware;
exports.uploadFilesResponse = uploadFilesResponse;
