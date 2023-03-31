/* eslint-disable require-jsdoc */
export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(emp) {
      return Object.keys(emp).length;
    },
  };
  return obj;
}
