// Topic: Math
// Input: 6 => true => Explanation: 6 = 2 * 3
// Input: 8 => true => Explanation: 8 = 2 * 2 * 2;
// Input: 14 => false => Explanation: 14 is not ugly since it includes another prime factor 7.

/**
 * @param {number} n
 * @return {boolean}
 */
// Solution 1
// time: O(log(n)) : space: O(1)
const isUgly = function(n) {
    if (n < 1) return false;
    if (n === 1) return true;

    const divisor = [2, 3, 5];

    for (let i = 0; i < divisor.length; i++) {
        while (n && n % divisor[i] === 0) {
            n = Math.floor(n / divisor[i]);
        }
    }
    return n === 1;
};

// Solution 2
const isUgly2 = function(n) {
    if (n <= 0) return false;

    while (n !== 1) {
        if (n % 2 === 0) n /= 2;
        else if (n % 3 === 0) n /= 3;
        else if (n % 5 === 0) n /= 5;
        else return false;
    }
    return true;
}

// Solution 3
const isUgly3 = function(n) {
    if (n === 1) return true;

    if (n % 2 === 0) return isUgly3(n / 2);
    else if (n % 3 === 0) return isUgly3(n / 3);
    else if (n % 5 === 0) return isUgly3(n / 5);
    else return false;
}

console.log(isUgly3(1));