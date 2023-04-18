const nodemailer = require('nodemailer');

const sendEmail = (email, subject, message) => {


    // Configurar transporte
    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'nicoyabichino@gmail.com',
        pass: 'nxjpkaptjlocketi'
    }
    });


    const mailOptions = {
      from: 'nicoyabichino@gmail.com',
      to: email,
      subject: subject,
      text: message
    };

    try {
        transporter.sendMail(mailOptions, function(error, info){
            console.log('Email enviado: ' + info.response);
          });
        res.status(200).json();
    } catch (error) {
        res.status(400).json('Mail not sent!');
    }
  }

  module.exports = {
    sendEmail
};