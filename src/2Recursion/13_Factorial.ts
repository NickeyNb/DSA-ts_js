// Factorial of a number
// Time Complexity = O(n)

const factorialOfNum = function (n: number): number {
    if (n <= 1) return 1;
    return n * factorialOfNum(n - 1);
};

console.log(factorialOfNum(0)); // 1
console.log(factorialOfNum(1)); // 1
console.log(factorialOfNum(5)); // 120
