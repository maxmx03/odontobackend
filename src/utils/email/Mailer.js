const nodemailer = require('nodemailer');
const moment = require('moment');
const path = require('path');

const { SUCCESS, SERVER_ERROR } = require('../../constants/code');

class Mailer {
  static async sendRecoverPassword(email, password, { req, res }) {
    const filePath = path.resolve('src', 'assets', 'img', 'odontoeasy.png');
    const transport = nodemailer.createTransport({
      service: 'Hotmail',
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
      logger: process.env.API_ENV === 'development' ? true : false,
    });
    const date = moment().format('L');

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
        res.status(SERVER_ERROR.STATUS).json({
          msg: SERVER_ERROR.MSG,
        });

        return;
      }

      res.status(SUCCESS.STATUS).json({
        msg: SUCCESS.MSG,
      });
    });
  }
}

module.exports = Mailer;
