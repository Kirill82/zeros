module.exports = function getZerosCount(number) {
  // your implementation
  let numZero = 0;
  let n = 1;
  while ((number / (Math.pow(5, n)))^0 > 0) {
    numZero += (number / (Math.pow(5, n)))^0;
    n += 1;
  }

  return numZero;
}
