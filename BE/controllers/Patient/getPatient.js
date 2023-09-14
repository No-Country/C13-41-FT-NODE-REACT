const { Patient, Comment, Consult, Invoice } = require('../../database/models');

const modelsToInclude = [
  { model: Comment, as: 'comments' },
  { model: Consult, as: 'consults' },
  { model: Invoice, as: 'invoices' }
];

const rowsPerPage = 15; // Number of rows per page

const getPatient = async (req, res) => {
  try {
    const { email } = req.query;

    if (email) {
      // If email is provided, retrieve a single patient by email
      const patient = await Patient.findOne({
        where: { email },
        include: modelsToInclude
      });

      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }

      return res.status(200).json({ message: 'Patient data', data: { patient } });
    }

    // If email is not provided, retrieve all patients
    const patients = await Patient.findAll({
      include: modelsToInclude
    });

    // Organize patients into pages
    const pages = [];
    for (let i = 0; i < patients.length; i += rowsPerPage) {
      const pagePatients = patients.slice(i, i + rowsPerPage);
      pages.push(pagePatients);
    }

    return res.status(200).json({
      message: 'Patient data',
      data: {
        patients: {
          page: pages,
        },
      },
    });
  } catch (error) {
    return res.status(400).json({ error: 'Get Patient', message: error.message });
  }
};

module.exports = { getPatient };
