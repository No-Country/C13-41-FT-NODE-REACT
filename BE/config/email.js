const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: "mail.gmx.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = transporter