export default class Building {
  /*
   * sqft - square fit
   * */
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) this.evacuationWarningMessage()
    this._sqft = sqft;

  }

  // getters and setters
  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
