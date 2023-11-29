// 169. Majority Element
// Time Complexity = O(n)
// Space Complexity = O(n)

var majorityElement = function (nums: number[]): number {
    let map: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    let keys = Object.keys(map);
    let mapSize = keys.length;

    let mx = map[parseInt(keys[0])];
    let ans = parseInt(keys[0]);

    for (let i = 1; i < mapSize; i++) {
        if (map[parseInt(keys[i])] > mx) {
            mx = map[parseInt(keys[i])];
            ans = parseInt(keys[i]);
        }
    }

    return ans;
};
