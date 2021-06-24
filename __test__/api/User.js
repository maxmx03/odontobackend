const request = require('supertest');

const userRoutes = require('../../src/constants/routes/userRoutes');
const app = require('../../src/app');
const truncate = require('../truncate');

describe('UserController', () => {
  beforeAll(async () => {
    const dotenv = require('dotenv');
    dotenv.config();
    await truncate();
  });

  it('should create a user', async () => {
    const response = await request(app)
      .post(`/user/${userRoutes.CREATE_USER}`)
      .send({
        firstName: 'Julia',
        lastName: 'Rita Barros',
        email: 'juliaritabarros-84@formulaweb.com.br',
        password: 'Jz7i%P0*',
        type: 'admin',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should find all users in the database', async () => {
    const response = await request(app).get(`/user/${userRoutes.FIND_USERS}`);

    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
  });

  it('should update user profile', async () => {
    const response = await request(app)
      .patch(`/user/${userRoutes.UPDATE_USER_PROFILE}`)
      .send({
        firstName: 'Julia',
        lastName: 'Rita Barroso',
        type: 'admin',
        userId: 1,
      });

    expect(response.statusCode).toBe(200);
  });

  it('should update user email', async () => {
    const response = await request(app)
      .patch(`/user/${userRoutes.UPDATE_USER_EMAIL}`)
      .send({
        email: 'juliaritabarros-84@gmail.com',
        userId: '1',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should update user password', async () => {
    const response = await request(app)
      .patch(`/user/${userRoutes.UPDATE_USER_PASSWORD}`)
      .send({
        password: 'juliaJz7i%P0*',
        userId: '1',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should delete user', async () => {
    const response = await request(app).delete(`/user/delete/account/1`);

    expect(response.statusCode).toBe(200);
  });
});
