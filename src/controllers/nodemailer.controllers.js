const nodemailer = require('nodemailer');

    async function sendEmail(email, subject, message) {
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
        const info = await transporter.sendMail(mailOptions);
        console.log('Email enviado: ' + info.response);
      } catch (error) {
        console.log(error);
        throw new Error('No se pudo enviar el correo electrónico');
      }
    }

    module.exports = {
      sendEmail
    };