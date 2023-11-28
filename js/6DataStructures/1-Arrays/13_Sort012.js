// 75. Sort Colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let st = 0;
    let end = nums.length - 1;
    let i = 0;
    while (i <= end) {
        if (nums[i] === 0) {
            let temp = nums[i];
            nums[i] = nums[st];
            nums[st] = temp;
            st++;
            i++;
        } else if (nums[i] === 2) {
            let temp = nums[i];
            nums[i] = nums[end];
            nums[end] = temp;
            end--;
        } else {
            i++;
        }
    }
};
