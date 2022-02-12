
# Odontobackend

Projeto criado para o curso de odontologia da faculdade anhanguera.




## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

- NODE_ENV: Mudar o ambiente para: development, production, test
- TOKEN_API: Token da api.
- PORT: Port da api, padrão 8080
- CORS_ORIGIN: Url do site que tem permissão pra mandar requisições pra API
- DB_*: Utilizado no banco de dados.
- ADMIN_*: Utilizado para criar um novo usuário do tipo admin.
- MAILER_*: Utilizado para mandar email ao usuário

```env
NODE_ENV
TOKEN_API
PORT`
CORS_ORIGIN
ADMIN_FIRSTNAME
ADMIN_LASTNAME
ADMIN_EMAIL
ADMIN_PASSWORD
DB_HOST
DB_PORT
DB_DIALECT
BD_USERNAME
BD_PASSWORD
MAILER_USER
MAILER_PASS
```


## Instalação

Instalar dependências

```bash
yarn
```

Iniciar docker-compose (se não quiser configurar o banco de dados)

```bash
docker-compose -f docker-compose.yaml up
```

Rodar o projeto

```bash
yarn run migrate && yarn dev
```
    
## Documentação da API

### Usuário

#### Retorna todos os usuários

```http
  GET /user/find/users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |

#### Cria um novo usuário

```http
  POST /user/create/account
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `firstName` | `string` | **Obrigatório**. Nome do usuário |
| `lastName` | `string` | **Obrigatório**. Sobrenome do usuário |
| `email` | `string` | **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |
| `confirmPassword` | `string` | **Obrigatório**. Confirmação de senha |

#### Atualiza o email do usuário

```http
  PATCH /user/update/email
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `userId` | `number` | **Obrigatório**. Id do usuário |
| `email` | `string` | **Obrigatório**. Novo email |

#### Atualiza a senha do usuário

```http
  PATCH /user/update/password
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `userId` | `number` | **Obrigatório**. Id do usuário |
| `password` | `string` | **Obrigatório**. Nova senha |

#### Atualiza o perfil do usuário

```http
  PATCH /user/update/profile
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `userId` | `number` | **Obrigatório**. Id do usuário |
| `firstName` | `string` | **Obrigatório**. Nome do usuário |
| `lastName` | `string` | **Obrigatório**. Sobrenome do usuário |
| `type` | `string` | **Obrigatório**. Tipo de usuário: "admin", "user", "disabled" |

#### Deleta o usuário

```http
  DELETE /user/delete/account/{userId}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `userId` | `number` | **Obrigatório**. Id do usuário |

### Estudante

#### Retorna todos os estudantes

```http
  GET /student/find/students
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |

#### Cria um novo estudante

```http
  POST /student/create/account
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `firstName` | `string` | **Obrigatório**. Nome do estudante |
| `lastName` | `string` | **Obrigatório**. Sobrenome do estudante |
| `email` | `string` | **Obrigatório**. Email do estudante |
| `password` | `string` | **Obrigatório**. Senha do estudante|
| `cpf` | `string` | **Obrigatório**. Cpf do estudante |
| `phone` | `string` | **Obrigatório**. Telefone do estudante |
| `shift` | `string` | **Obrigatório**. Turno do estudante: "morning", "afternoon", "night" |

#### Atualiza o email do estudante

```http
  PATCH /student/update/email
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |
| `email` | `string` | **Obrigatório**. Novo email |

#### Atualiza a senha do estudante

```http
  PATCH /student/update/password
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |
| `password` | `string` | **Obrigatório**. Nova senha |

#### Atualiza o perfil do estudante

```http
  PATCH /student/update/profile
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |
| `firstName` | `string` | **Obrigatório**. Nome do estudante |
| `lastName` | `string` | **Obrigatório**. Sobrenome do estudante |
| `cpf` | `string` | **Obrigatório**. Cpf do estudante |
| `phone` | `string` | **Obrigatório**. Telefone do estudante |
| `shift` | `string` | **Obrigatório**. Turno do estudante: "morning", "afternoon", "night" |

#### Deleta o estudante

```http
  DELETE /student/delete/account/{studentId}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |

### Pacote

#### Retorna todos os pacotes

```http
  GET /package/find/packages
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |

#### Cria um novo pacote

```http
  POST /package/create/student/package
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |
| `description` | `string` | **Obrigatório**. Descrição do pacote |
| `password` | `string` | **Obrigatório**. Senha do estudante |
| `confirmPassword` | `string` | **Obrigatório**. Confirmação da senha |
| `validity` | `string` | **Obrigatório**. Validade do pacote |
| `status` | `string` | **Obrigatório**. Status do pacote: "stored", "withdraw" |


#### Atualiza o code do pacote

```http
  PATCH /package/update/student/package/code
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `packageId` | `number` | **Obrigatório**. Id do pacote |
| `studentId` | `number` | **Obrigatório**. Id do studante |
| `code` | `number` | **Obrigatório**. Código do pacote |

#### Atualiza a senha do perfil

```http
  PATCH /package/update/student/package/profile
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `packageId` | `number` | **Obrigatório**. Id do pacote |
| `validity` | `string` | **Obrigatório**. Validade do pacote |
| `validity` | `string` | **Obrigatório**. Status do pacote: "stored", "withdraw" |

#### Deleta o pacote

```http
  DELETE /package/delete/student/package/{package}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |
| `studentId` | `number` | **Obrigatório**. Id do estudante |

### Authenticação

#### Loga o usuário

```http
  POST /auth/login/user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. O email do usuário |
| `password` | `string` | **Obrigatório**. A senha do usuário |

#### Verifica se o usuário está logado

```http
  GET /auth/login/user/logged
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |


#### Recupera a senha do usuário

```http
  POST /auth/login/forgetPassword
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email` | `string` | **Obrigatório**. O email do usuário |

### Serviço

#### Encontra os serviços realizados

```http
  GET /service/find/services
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer Token` | `string` | **Obrigatório**. O token da sua API |







## Autores

- [Max Miliano](https://github.com/maxmx03)


## Referência

 - [Node.js](https://nodejs.org/en/)
 - [Express.js](http://expressjs.com/pt-br/)
 - [Sequelize](https://sequelize.org/)
 - [Docker](https://docs.docker.com/desktop/)

