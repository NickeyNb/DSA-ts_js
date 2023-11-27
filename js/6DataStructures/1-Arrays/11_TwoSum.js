// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        let remain = target - nums[i];
        if (map[remain] !== undefined) {
            return [map[remain], i];
        } else {
            map[val] = i;
        }
    }
};
