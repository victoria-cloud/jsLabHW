/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */

function fibonacci(n) {
  /*
   * Your task is to calculate the nth value of the
   * Fibonacci sequence.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * Store the value in the nThFibonacci variable.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  // program to display fibonacci sequence using recursion
  let nThFibonacci = n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    return nThFibonacci;
}

module.exports = fibonacci;
