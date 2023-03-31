/* eslint-disable require-jsdoc */
export default function createIteratorObject(report) {
  const obj = [];
  for (const val of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[val]) {
      obj.push(emp);
    };
  };
  return obj;
}
