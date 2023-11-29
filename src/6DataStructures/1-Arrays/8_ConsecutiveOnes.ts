// 485. Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Time Complexity=O(n)
var findMaxConsecutiveOnes = function (nums: number[]): number {
    let mx = -1;
    let ones = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones++;
        } else {
            ones = 0;
        }
        mx = Math.max(mx, ones);
    }
    return mx;
};
