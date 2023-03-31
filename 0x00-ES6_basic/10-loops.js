/* eslint-disable require-jsdoc */
/* eslint-disable guard-for-in */
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array[array.indexOf(idx)] = appendString + idx;
  };

  return array;
}
