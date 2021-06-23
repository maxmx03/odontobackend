const WebToken = require('../../../src/utils/token/WebToken');

describe('Testing WebToken class methods', () => {
  beforeAll(() => {
    const dotenv = require('dotenv');    
    dotenv.config();
  });

  it('verify if create is creating a token, return a string', () => {
    expect(
      typeof WebToken.create({
        id: 1,
        email: 'test@gmail.com',
        firstName: 'test',
        lastName: 'tester',
        type: 'test',
      })
    ).toBe('string');
  });

  it('verify if "verify method" is validating a token, return string || object', () => {
    const token = WebToken.create({
      id: 1,
      email: 'test@gmail.com',
      firstName: 'test',
      lastName: 'tester',
      type: 'test',
    });
    const authentication = `Baurer ${token}`;

    expect(typeof WebToken.verify(authentication)).toBe('object');
  })
});
