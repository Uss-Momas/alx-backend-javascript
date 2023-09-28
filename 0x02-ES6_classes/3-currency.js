export default class Currency {
  // constructor
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters and setters
  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  // Public method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
