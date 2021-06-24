const moment = require('moment');

const Validator = require('../../../src/utils/validators/Validator');
const GeneratorPassword = require('../../../src/utils/generator/GeneratorPassword');

describe('Validator', () => {
  it('clearHTML should remove html elements from string, return a string', () => {
    expect(Validator.clearHTML('<p>value</p>')).toBe('value');
  });

  it('isNotEmpty should verify if is not false, return boolean', () => {
    expect(Validator.isNotEmpty('value')).toBe(true);
    expect(Validator.isNotEmpty(0)).toBe(true);
    expect(Validator.isNotEmpty('')).toBe(false);
  });

  it('isShift should verify if is morning, afternoon or night, return boolean', () => {
    expect(Validator.isShift('morning')).toBe(true);
    expect(Validator.isShift('morning afternoon night')).toBe(false);
  });

  it('isType should verify if is admin or user, return boolean', () => {
    expect(Validator.isType('admin')).toBe(true);
    expect(Validator.isType('adminuser')).toBe(false);
  });

  it('isStatus should verify if is stored or withdrawn, return boolean', () => {
    expect(Validator.isStatus('stored')).toBe(true);
    expect(Validator.isStatus('not stored')).toBe(false);
  });

  it('isDate should verify if is date, return boolean', () => {
    expect(Validator.isDate(moment().format())).toBe(true);
    expect(Validator.isDate('01/01/2021')).toBe(false);
  });

  it('isCPF should verify if is cpf, return boolean', () => {
    expect(Validator.isCPF('806.633.420-66')).toBe(true);
    expect(Validator.isCPF('111.111.111-11')).toBe(false);
    expect(Validator.isCPF('')).toBe(false);
  });

  it('isEmail should verify if is email, return boolean', () => {
    expect(Validator.isEmail('test@gmail.com')).toBe(true);
    expect(Validator.isEmail('test@')).toBe(false);
  });

  it('isPassword should verify if is password, return boolean', () => {
    const { raw } = GeneratorPassword.generate();

    expect(Validator.isPassword(raw)).toBe(true);
    expect(Validator.isPassword('123456789')).toBe(false);
  });

  it('validateUserAccount should verify user password, return boolean', () => {
    const { raw, password } = GeneratorPassword.generate();

    expect(Validator.validateUserAccount(raw, { password })).toBe(true);
    expect(Validator.validateUserAccount('123456789', { password })).toBe(false);
  });
});
