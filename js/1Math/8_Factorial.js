// Factorial of a number
// Time Complexity = O(n)

function factorialOfNumber(n) {
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorialOfNumber(5)); // 120
