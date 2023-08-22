const bcrypt = require('bcrypt')
const Patient = require('../../models/Patient')
const Medic = require('../../models/Medic')

/*
-Deben tener 2 diferente forms para registrarse tanto paciente como doctores
-Debe haber un formulario de registro claro y accesible.
-El formulario debe permitir la entrada de nombre, correo electrónico, contraseña segura y fecha de nacimiento.
-Se debe proporcionar retroalimentación inmediata en caso de errores de entrada.
-Después de registrarme, debo recibir un correo electrónico de confirmación.
*/

const createPatient = async (req, res) => {
  try {

    const { fullname, password, email, country, gender, birthdate, nid } = req.body

    if (!fullname || !password || !email || !country || !gender || !birthdate || !nid) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const isDuplicated = await Patient.findOne({
      where: {
        email: email
      }
    })

    if (isDuplicated) {
      return res.status(400).json({ error: 'Patient duplicated' })
    }

    const newPatient = await Patient.create({
      fullname,
      password:hashedPwd,
      email,
      country,
      nid,
      gender,
      birthdate
    });

    res.status(201).json({ message: 'Patient created', patient: newPatient })
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error' })
  }   
}

const createMedic = async (req, res) => {
  try {

    const { fullname, password, email, country, gender, birthdate, nid, profesionalId } = req.body
    
    if (!fullname || !password || !email || !country || !gender || !birthdate || !nid || !profesionalId) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const isDuplicated = await Medic.findOne({
      where: {
        email: email
      }
    })

    if (isDuplicated) {
      return res.status(400).json({ error: 'duplicated', message: "email is duplicated" })
    }

    const newMedic = await Medic.create({
      fullname,
      password:hashedPwd,
      email,
      country,
      gender,
      profesionalId,
      birthdate
    });

    res.status(201).json({ data: { medic: newMedic }, message: "medic created" })
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error' })
  }   
}

module.exports = {
  createPatient,
  createMedic
}