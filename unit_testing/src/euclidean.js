/**
 * The function determines the greatest common divisor or
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */
function euclidean(a, b) {
  /*
   * Your task is to compute the greatest common divisor of
   * the numbers given in a and b variables, using the
   * Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
   * If you have the result, assign it to the variable, called gcd.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  if(a < 0) { 
    return 0;
  }
    a = Math.abs(a);
    b = Math.abs(b);
    while (a && b && a !== b) {
       if (a > b){
          [a, b] = [a - b, b];
       } else {
          [a, b] = [a, b - a];
       };
    };
    return gcd = a || b ;
 };
  
  // ...AND THIS COMMENT LINE!
module.exports = euclidean;
