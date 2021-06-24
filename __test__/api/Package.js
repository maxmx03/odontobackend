const request = require('supertest');

const packageRoutes = require('../../src/constants/routes/packageRoutes');
const app = require('../../src/app');

describe('PackageController', () => {
  beforeAll(async () => {
    const dotenv = require('dotenv');
    dotenv.config();
  });

  it('should create a package', async () => {
    const response = await request(app)
      .post(`/package/${packageRoutes.CREATE_PACKAGE}`)
      .send({
        studentId: 1,
        description: 'Package contains medicines',
        validity: '2021-06-25T13:47:22-03:00',
        status: 'stored',
      });

    expect(response.statusCode).toBe(500);
  });

  it('should find all packages in the database', async () => {
    const response = await request(app).get(
      `/package/${packageRoutes.FIND_PACKAGES}`
    );

    expect(response.statusCode).toBe(200);
  });

  it('should update package code', async () => {
    const response = await request(app)
      .patch(`/package/${packageRoutes.UPDATE_PACKAGE_CODE}`)
      .send({
        packageId: 1,
        studentId: 1,
        code: 10,
      });

    expect(response.statusCode).toBe(200);
  });

  it('should update package profile', async () => {
    const response = await request(app)
      .patch(`/package/${packageRoutes.UPDATE_PACKAGE_PROFILE}`)
      .send({
        packageId: 1,
        description: 'the packages were removed',
        validity: '2021-06-25T13:47:22-03:00',
        status: 'withdrawn',
      });

    expect(response.statusCode).toBe(200);
  });

  it('should remove package', async () => {
    const response = await request(app).delete(
      '/package/delete/student/package/1'
    );

    expect(response.statusCode).toBe(200);
  });
});
