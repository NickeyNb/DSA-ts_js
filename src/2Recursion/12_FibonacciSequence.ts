// Fibonacci Sequence
// Given a number 'n' , find the nth element in the fibonacci sequence.
// Time complexity = O(2^n)

function fibonacci(n: number): number {
    if (n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4)); // 3
