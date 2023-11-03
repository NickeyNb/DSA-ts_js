// Largest element in the array
// Given an array, we have to find the largest element in the array.

/**
 * => Approaches and Time Complexity = O(n)
 *
 * -> Approach-1: O(n)
 * -  Using bubble sort approach as it will give us the maximum element at last in each iteration.
 * -> Approach-2: O(n)
 * -  Taking the first element as maximum and comparing other elements to it, if any element is greater than that    element it will be maximum and same process will be repeated for that.
 */

// Approach-1 = O(n)
// const largestElement = function (nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] >= nums[i + 1]) {
//             temp = nums[i];
//             nums[i] = nums[i + 1];
//             nums[i + 1] = temp;
//         }
//     }
//     return nums[nums.length - 1];
// };

// Approach-2 = O(n)
const largestElement = (nums) => {
    let mx = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > mx) {
            mx = nums[i];
        }
    }
    return mx;
};
let nums = [-5, 4, 250, 1, 15, 10];
console.log(largestElement(nums));
