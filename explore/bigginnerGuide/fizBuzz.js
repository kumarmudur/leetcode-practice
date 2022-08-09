// Topic: Math, String, Simulation

/**
 * @param {number} n
 * @return {string[]}
 */
// time: O(n) | space: O(n) 
const fizzBuzz = function(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0 && i % 5 === 0)) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

console.log(fizzBuzz(3));