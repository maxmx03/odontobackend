const request = require('supertest');

const studentRoutes = require('../../src/constants/routes/studentRoutes');
const app = require('../../src/app');
const truncate = require('../truncate');

describe('StudentController', () => {
  beforeAll(async () => {
    const dotenv = require('dotenv');
    dotenv.config();
    await truncate();
  });

  it('should create a student', async () => {
    const response = await request(app)
      .post(`/student/${studentRoutes.CREATE_STUDENT}`)
      .send({
        firstName: 'Julia',
        lastName: 'Rita Barros',
        email: 'juliaritabarros-84@formulaweb.com.br',
        password: 'Jz7i%P0*',
        cpf: '983.682.623-80',
        phone: '(63) 3926-7426',
        shift: 'night',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should find all students in the database', async () => {
    const response = await request(app).get(
      `/student/${studentRoutes.FIND_STUDENTS}`
    );

    expect(response.statusCode).toBe(200);
    expect(typeof response.body).toBe('object');
  });

  it('should update student profile', async () => {
    const response = await request(app)
      .patch(`/student/${studentRoutes.UPDATE_STUDENT_PROFILE}`)
      .send({
        firstName: 'Julia',
        lastName: 'Rita Barroso',
        shift: 'afternoon',
        cpf: '983.682.623-80',
        phone: '(63) 3926-1456',
        studentId: 1,
      });

    expect(response.statusCode).toBe(200);
  });

  it('should update email', async () => {
    const response = await request(app)
      .patch(`/student/${studentRoutes.UPDATE_STUDENT_EMAIL}`)
      .send({
        studentId: 1,
        email: 'juliaritabarros-84@gmail.com',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should update password', async () => {
    const response = await request(app)
      .patch(`/student/${studentRoutes.UPDATE_STUDENT_PASSWORD}`)
      .send({
        studentId: 1,
        password: 'juliaJz7i%P0*',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should delete student user', async () => {
    const response = await request(app).delete('/student/delete/account/1');

    expect(response.statusCode).toBe(200);
  });
});
