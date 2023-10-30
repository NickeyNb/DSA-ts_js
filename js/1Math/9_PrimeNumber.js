// Prime Number
// A number is prime or not
// Time Complexity = O(sqrt(n))

const isPrime = function (n) {
    if (n < 1) return false;
    if (n === 1) return "1 is neither prime nor composite";
    for (let i = 2; i <= Math.sqrt(n) /** i<=n/2 */; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(1)); // neither prime nor composite
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
