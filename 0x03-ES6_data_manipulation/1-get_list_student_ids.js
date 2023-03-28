/* eslint-disable require-jsdoc */
export default function getListStudentIds(obj) {
  const emp = [];

  if (Array.isArray(obj)) {
    const res = obj.map(({ id }) => id);
    return res;
  }

  return emp;
}
