// Binary Search
// Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array.
// Return -1 if the target element is not found.

// Time complexity = O(log n)

// Recursive Binary search in 2Recursion folder - 17_RecursiveBinarySearch.js

function binarySearchIterative(arr: number[], target: number): number {
    arr.sort((a, b) => a - b);
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearchIterative([10, 9, 8, 1], 1)); // 0
console.log(binarySearchIterative([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearchIterative([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearchIterative([-5, 2, 4, 6, 10], 1)); // -1
