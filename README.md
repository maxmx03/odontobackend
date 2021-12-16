# ATENÇÃO!

## Scripts
- No package.json a forma de como setar uma variável como mostra abaixo.
- Por padrão está sendo utilizado a do Linux.

### Linux

```bash`
NODE_ENV=development
```

### Windows

```powershell
$env:NODE_ENV="development"

```
- O odontofrontend não possue cadastro de usuário, o primeiro usuário deverá ser criado utilizando postman.
- CREATE_FIRST_USER=true dentro do .env para criar o primeiro usuário

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
- email: milianordelcanto@gmail.com
- github: https://github.com/maxmx03

# API Routes Postman
### {{home}} = http://localhost:8080
1. User
   1. {{home}}/user/find/users
   2. {{home}}/user/create/account
   3. {{home}}/user/update/email
   4. {{home}}/user/update/password
   5. {{home}}/user/update/profile
   6. {{home}}/user/delete/account/2
2. Packages
   1. {{home}}/package/find/packages
   2. {{home}}/package/create/student/package
   3. {{home}}/package/update/student/package/code
   4. {{home}}/package/update/student/package/profile
   5. {{home}}/package/delete/student/package/1
3. Student
   1. {{home}}/student/find/students
   2. {{home}}/student/create/account
   3. {{home}}/student/update/email
   4. {{home}}/student/update/password
   5. {{home}}/student/update/profile
   6. {{home}}/student/delete/account/7
4. Auth
   1. {{home}}/auth/login/user
   2. {{home}}/auth/login/user/logged
   3. {{home}}/auth/login/forgetPassword
5. Service
   1. {{home}}/service/find/services

# PROJECT STRUCTURE
1. src
   1. Routes - Routing
   2. Middlewares - Filter
   3. Controllers - Data manipulation
   4. Models - Database Table
   5. Database - Create Database & Create Table & Insert Data to Table
   6. Config - Sequelize Config
   7. Constants
   8. Utils - Custom Functions - Custom Classes - etc...

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

1. BD_USERNAME=username
2. BD_PASSWORD=password
3. BD_HOST=host
4. BD_DIALECT=postgres
5. TOKEN_KEY=secret
6. CORS_ORIGIN=website
7, PORT=port
8. MAILER_USER=email
9. MAILER_PASS=email_password
10. CREATE_FIRST_USER=create_first_user_without_token
