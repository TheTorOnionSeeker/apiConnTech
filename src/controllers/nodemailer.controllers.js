const nodemailer = require('nodemailer');

async function sendEmail(req,res) {

    const {email}=req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        post: 465,
        secure: true,
        auth: {
            user: 'nicoyabichino@gmail.com',
            pass: 'ctjegscjutdbttos'
        }
    });

    const mailOptions = {
        from: "Conntech",
        to: email,
        subject: "enviado desde Conntech Inc.",
        text: "Registro exitoso, !Bienvenido a Conntech!",
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        } else{
            console.log("email enviado")
            res.status(200).json(req.body)
        }
    })


      /* const transporter = nodemailer.createTransport({
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
      } */
}

module.exports = {
    sendEmail
};