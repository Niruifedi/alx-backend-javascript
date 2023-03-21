export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  try {
    const res = numerator / denominator;
    return res;
  } catch (err) {
    throw new Error('cannot divide by 0');
  }
}
