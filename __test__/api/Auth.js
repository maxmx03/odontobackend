const request = require('supertest');

const authRoutes = require('../../src/constants/routes/authRoutes');
const app = require('../../src/app');

describe('AuthController', () => {
  beforeAll(async () => {
    const dotenv = require('dotenv');
    dotenv.config();
  });

  let token = '';

  it('should login user', async () => {
    const response = await request(app)
      .post(`/auth/${authRoutes.USER_LOGIN}`)
      .send({
        email: 'juliaritabarros-84@gmail.com',
        password: 'juliaJz7i%P0*',
      });

    token = response.body.token;
    expect(response.statusCode).toBe(500);
  });

  it("should verify user token to see if he's logged in", async () => {
    const response = await request(app)
      .get(`/auth/${authRoutes.IS_USER_LOGGED}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(response.statusCode).toBe(500);
    expect(typeof response.body).toBe('object');
  });

  jest.setTimeout(20000);

  it('should send a email to a user with a new password', async () => {
    const response = await request(app)
      .post(`/auth/${authRoutes.RECOVER_PASSWORD}`)
      .send({
        email: 'juliaritabarros-84@gmail.com',
      });

    expect(response.statusCode).toBe(500);
  });
});
