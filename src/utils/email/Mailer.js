const nodemailer = require('nodemailer');
const moment = require('moment');
const path = require('path');

const filePath = path.resolve('src', 'assets', 'img', 'odontoeasy.png');

const transport = nodemailer.createTransport({
  service: 'Hotmail',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
  logger: false,
});

const date = moment().format('L');

class Mailer {
  static sendRecoverPassword(email, password) {
    const transportMessage = {
      from: process.env.MAILER_USER,
      to: email,
      subject: 'OdontoEasy Recuperar Senha',
      attachments: [
        {
          filename: 'odontoeasy.png',
          path: filePath,
          cid: 'odontoeasy',
        },
      ],
      html: `
        <body>
          <img src="cid:odontoeasy" alt="odontoeasy logo" style="width: 150px" />
          <h3>Sua nova senha: ${password}</h3>
          <p>Data da solitação: ${date}</p>
        </body>
    `,
    };

    transport.sendMail(transportMessage, (err, info) => {
      if (err) {
        return Promise.reject(err);
      }

      return Promise.resolve(info);
    });
  }
}

module.exports = Mailer;
