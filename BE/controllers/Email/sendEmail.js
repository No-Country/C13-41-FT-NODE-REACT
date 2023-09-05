const transporter = require('../../config/email')

async function sendEmail(res, toRecipient, emailSubject, emailBody, message) {
  try {

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toRecipient,
      subject: emailSubject,
      html: emailBody,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).send({message})
    
  } catch (error) {
    return res.status(400).json({ message: error.message, error: "Email error" });
  }
}

module.exports = {
  sendEmail
};

