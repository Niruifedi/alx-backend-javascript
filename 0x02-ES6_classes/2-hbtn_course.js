/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }

    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /* getter for name property */
  get name() {
    return this._name;
  }

  /* setter for name property */
  set name(new_name = '') {
    if (typeof new_name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = new_name;
  }

  /* getter for length property */
  get length() {
    return this._length;
  }

  /* setter for length property */
  set length(val = 0) {
    if (typeof val !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = val;
  }

  /* getter for student property */
  get students() {
    return this._students;
  }

  /* setter for students property */
  set students(val = []) {
    val.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = val;
  }
}
export default HolbertonCourse;
