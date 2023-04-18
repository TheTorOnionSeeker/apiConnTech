import { createTransport } from 'nodemailer';

const sendEmail = (email, subject, message) => {


    // Configurar transporte
    const transporter = createTransport({
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
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email enviado: ' + info.response);
      }
    });
  }

  export default {
    sendEmail
};