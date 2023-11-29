// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.
// Note: Return k after placing the final result in the first k slots of the array.

// using two ptr approach
// Time complexity = O(n)
const removeDuplicate = (nums: number[]): number[] => {
    let count = 0;
    let i = 0;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            nums[count] = nums[i];
            i = j;
            count++;
        }
    }
    nums[count] = nums[i];
    return nums;
};
const nums4 = [0, 0, 1, 1, 1, 2, 2];
console.log(removeDuplicate(nums4));
