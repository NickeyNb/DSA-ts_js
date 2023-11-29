// Find the second smallest and second largest element in the array.
// Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

/**
 * => Approaches and Time Complexity
 * - Approach-1 = O(n^2) Sort the array and return 2nd element from 1st and 2nd element from last.
 *
 * - Approach-2 = O(2n) = O(n) Two times Bubble sort type approach to get the result.
 *
 * - Approach-3 (optimal) = O(n) Using multiple pointers.
 */

// Approach-3 = O(n)
function secondLargestSmallest(nums: number[]) {
    let l, s, sl, ss;
    l = s = sl = ss = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > sl) {
            sl = nums[i];
            if (nums[i] > l) {
                sl = l;
                l = nums[i];
            }
        } else if (nums[i] < ss) {
            ss = nums[i];
            if (nums[i] < s) {
                ss = s;
                s = nums[i];
            }
        } else {
        }
    }
    console.log(`Largest is ${l} and second largest is ${sl}`);
    console.log(`Smallest is ${s} and second smallest is ${ss}`);
}
const nums2 = [-1, 1, -2, 2, 8, 6];
secondLargestSmallest(nums2);
// Largest is 8 and second largest is 6
// Smallest is -2 and second smallest is -1
