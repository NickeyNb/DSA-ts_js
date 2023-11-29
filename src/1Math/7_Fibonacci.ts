// Fibonacci sequence
// Give a number 'n', find first 'n' elements of the Fibonacci sequence
// Time Complexity = O(n);

function fibonacciFuncOne(n: number): number[] {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        let next = fib[i - 1] + fib[i - 2];
        fib.push(next);
    }
    return fib;
}

console.log(fibonacciFuncOne(5)); // [0, 1, 1, 2, 3]

// ===========================================

// const fibonacciFuncTWo = function (n: number): number[] {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let next = fib[i - 1] + fib[i - 2];
//         fib.push(next);
//     }
//     return fib;
// };
// console.log(fibonacciFuncTWo(5));

// ===========================================

// const fibonacciFuncThree = (n: number): number[] => {
//     const fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         let next = fib[i - 1] + fib[i - 2];
//         fib.push(next);
//     }
//     return fib;
// };
// console.log(fibonacciFuncThree(5));
