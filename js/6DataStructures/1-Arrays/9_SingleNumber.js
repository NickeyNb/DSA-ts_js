// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity=O(n);
var singleNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < nums.length - 1; i = i + 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1];
};
