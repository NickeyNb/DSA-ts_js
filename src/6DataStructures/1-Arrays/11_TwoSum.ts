// 1. Two Sum
// Time Complexity = O(n)
// Space Complexity = O(n)
var twoSum = function (nums: number[], target: number): number[] {
    let map: { [key: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        let val: number = nums[i];
        let remain: number = target - nums[i];
        if (map[remain] !== undefined) {
            return [map[remain], i];
        } else {
            map[val] = i;
        }
    }
    return [];
};
