const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gracianigss@gmail.com",
        pass: "15132323"
    },
    tls: { rejectUnauthorized: false }
  });
  app.post('/send-email', (req, res) => {
      const message = {
        from: 'gracianigss@gmail.com',
        to: 'gracianigss@gmail.com',
        subject: 'E-mail enviado usando Node!',
        text: 'Bem fácil, não? ;)'
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email enviado: ' + info.response);
        }
      });
  })
