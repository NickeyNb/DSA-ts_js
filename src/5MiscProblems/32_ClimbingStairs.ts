// Climbing stair Iterative solution
// Given a staircase of "n" steps, count the number of distinct ways to climb to the top.
// You can either climb 1 step or 2 steps at a time.

// Time complexity = O(n)   = better than recursive approach

const climbingStairsIterative = (n: number): number => {
    let noOfSteps = [1, 2];
    for (let i = 2; i < n; i++) {
        noOfSteps[i] = noOfSteps[i - 1] + noOfSteps[i - 2];
    }
    return noOfSteps[n - 1];
};
let len = 4;
console.log(climbingStairsIterative(len)); // 5
