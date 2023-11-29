// Array is sorted or not
//  Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not.
// If the array is sorted then return True, Else return False.

// Time Complexity = O(n)
const isSorted = function (nums: number[]): boolean {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
            continue;
        }
        return false;
    }
    return true;
};

// const nums3 = [1, 2, 3, 4, 5];    // true
const nums3 = [1, 6, 4, 8, 7]; // false
console.log(isSorted(nums3));
