// Move zeroes to the end
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Time Complexity = O(n)

var moveZeroes = function (nums: number[]): void {
    let i = 0;
    let st = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            let temp = nums[st];
            nums[st] = nums[i];
            nums[i] = temp;
            st++;
            i++;
        } else {
            i++;
        }
    }
};
