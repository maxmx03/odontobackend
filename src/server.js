const app = require('./app');
const User = require('./models/User');
const { hashPassword } = require('./utils/encrypt');
const Validator = require('./utils/validators/Validator');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  const { ADMIN_FIRSTNAME, ADMIN_LASTNAME, ADMIN_EMAIL, ADMIN_PASSWORD } =
    process.env;
  const password = hashPassword(ADMIN_PASSWORD);

  User.create({
    firstName: ADMIN_FIRSTNAME,
    lastName: ADMIN_LASTNAME,
    email: ADMIN_EMAIL,
    password,
    type: 'admin',
  })
    .catch((error) => {
      if (Validator.isDevelopmentEnv()) {
        console.log(error);
      }
    })
    .finally(() => {
      console.log('listening on port ' + port);
    });
});
