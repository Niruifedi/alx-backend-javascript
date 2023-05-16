/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable max-len */
const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, {encoding: 'utf-8', flag: 'r'}).split('\n');
    data = data.slice(1, data.length);
    console.log(`Number of students: ${data.length}`);

    const fields = {};
    for (const row of data) {
      const students = row.split(',');
      if (!fields[students[3]]) {
        fields[students[3]] = [];
      }
      fields[students[3]].push(students[0]);
    }
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
