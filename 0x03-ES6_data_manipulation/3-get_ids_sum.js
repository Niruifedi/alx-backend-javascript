/* eslint-disable require-jsdoc */
export default function getStudentIdsSum(students) {
  const result = students.reduce(((reducer, item) => reducer + item.id), 0);
  return result;
}
