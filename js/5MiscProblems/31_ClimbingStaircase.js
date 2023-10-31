// Climbing staircase Recursive
// Given a staircase of "n" steps, count the number of distinct ways to climb to the top.
// You can either climb 1 step or 2 steps at a time.

// Time complexity = O(2^n)

// Approach :
// a) if n = 4, think from where will I reach to this stair-4 =>
//              from stair-3 or from stair-2(as I can climb 1step or 2step)
// b) To reach to stair-3, I will be in stair-2 or stair-1
// c) Recursively do this :)

const climbingStairs = function (n) {
    if (n < 2) return 1;
    return climbingStairs(n - 1) + climbingStairs(n - 2);
};

let n = 4;
console.log(climbingStairs(n)); // 5
