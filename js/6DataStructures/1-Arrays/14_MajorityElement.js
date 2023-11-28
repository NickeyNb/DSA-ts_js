// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let keys = Object.keys(map);
    let mapSize = Object.keys(map).length;

    let mx = map[keys[0]];
    let ans = keys[0];

    for (let i = 1; i < mapSize; i++) {
        if (map[keys[i]] > mx) {
            mx = map[keys[i]];
            ans = keys[i];
        }
    }
    return ans;
};
