/* eslint-disable require-jsdoc */
export default function getStudentsByLocation(student, city) {
  const arr = student.filter((student) => student.location === city);
  return arr;
}
