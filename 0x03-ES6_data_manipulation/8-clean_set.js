/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
export default function cleanSet(set, startString) {
  const strng = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const valsub = val.substring(startString.length);

      if (valsub && valsub !== val) {
        strng.push(valsub);
      }
    }
  }
  return strng.join('-');
}
