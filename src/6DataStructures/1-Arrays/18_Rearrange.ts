// 2149. Rearrange Array Elements by Sign

var rearrangeArray = function (nums: number[]): number[] {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(0);
    }

    let even = 0;
    let odd = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            ans[even] = nums[i];
            even = even + 2;
        } else {
            ans[odd] = nums[i];
            odd = odd + 2;
        }
    }
    return ans;
};
