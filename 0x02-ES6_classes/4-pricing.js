import Currency from './3-currency'; // eslint-disable-line

export default class Pricing {
  /**
   * amount - number
   * currency - Type Currency
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    return this._currency;
  }

  // class methods
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static methods
  static convertPrice(amount, convertionRate) {
    return amount * convertionRate;
  }
}
