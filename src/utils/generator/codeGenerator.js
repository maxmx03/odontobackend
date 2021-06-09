class CodeGenerator {
  constructor() {
    this.autoIncrement = 0;
    this.code = 0;
    this.history = [];
  }

  generate() {
    this.code += this.autoIncrement;
    this.history.push({ [this.autoIncrement]: this.code });
    this.autoIncrement += 1;
  }
}

module.exports = new CodeGenerator();
