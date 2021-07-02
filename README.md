# OPERATIONAL SYSTEM
- Linux (Ubuntu - distro)

# NODE VERSION
- node v14.16.1

# IDE
- Visual Studio Code

# FRAMEWORK 
- Express.js

# EXTENSIONS
- Prettier
- Editorconfig
- Dracula

# Developers
- name: Max Miliano
- email: maxmador15@gmail.com
- github: https://github.com/maxmx03

# PROJECT STRUCTURE
- Routes - Routing
- Middlewares - Filter
- Controllers - Data manipulation
- Models - Database Table
- Database - Create Database & Create Table & Insert Data to Table
- Config - Sequelize Config
- Constants
- Utils - Custom Functions - Custom Classes - etc...

# Sequelize CLI
 
# running migration
- yarn sequelize-cli db:migrate

# undoing migration
- yarn sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# create seed
- yarn sequelize-cli seed:generate --name demo-user

# running seed
- yarn sequelize-cli db:seed:all

# undoing seed
- yarn sequelize-cli db:seed:undo:all

# learn more at
https://sequelize.org/master/manual/migrations.html

# TDD
Tests were done sequentially, so for some tests to work other must be removed.
For example: To test if a user is logged in we need to login him first, but if we run another test before to verify if the user is being deleted successfully, the test to verify if a user is logged in will fail, because the user doesn't' exist.

# Env variables to be used

BD_USERNAME=username
BD_PASSWORD=password
BD_HOST=host
BD_DIALECT=postgres
TOKEN_KEY=secret
CORS_ORIGIN=website
PORT=port
MAILER_USER=email
MAILER_PASS=email_password
CREATE_FIRST_USER=create_first_user_without_token
