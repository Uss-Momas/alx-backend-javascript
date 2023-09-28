export default class HolbertonCourse {
  /**
   * name - String
   * length - Number
   * students - array of strings
   * */
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else throw TypeError('Length must be a number');
    if (typeof students === 'object') {
      this._students = students;
    } else throw TypeError('Students must be a array');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else throw TypeError('Length must be a number');
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students === 'object') {
      this._students = students;
    } else throw TypeError('Students must be a array');
  }
}
