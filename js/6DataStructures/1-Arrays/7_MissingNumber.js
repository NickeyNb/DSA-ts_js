// 268-Missing number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
// Approach-1
// Time Complexity = O(n)
// Space Complexity = O(n)
var missingNumber = function (nums) {
    let tempNums = [];
    for (let i = 0; i <= nums.length; i++) {
        tempNums.push(-1);
    }
    for (let i = 0; i < nums.length; i++) {
        tempNums[nums[i]] = 1;
    }
    for (let i = 0; i < tempNums.length; i++) {
        if (tempNums[i] === -1) {
            return i;
        }
    }
    return -1;
};
// ==========================================================
// Approach-2
// Time Complexity = O(n)
// Space Complexity = O(1)
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    return nums.length;
};
