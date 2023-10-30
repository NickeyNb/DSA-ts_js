// Recursive binary search
// Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array.
// Return -1 if the target element is not found.

// Time Complexity = O(log n) = same as iterative binary search.

// Iterative binary search in 3SearchAlgorithms folder - 16_BinarySearch.js

const binarySearch = (low, high, arr, target) => {
    let mid = Math.floor((low + high) / 2);
    while (low <= high) {
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            return binarySearch(low, mid - 1, arr, target);
        } else {
            return binarySearch(mid + 1, high, arr, target);
        }
    }
    return -1;
};

const recursiveBinarySearch = (arr, target) => {
    arr.sort(function (a, b) {
        return a - b;
    });
    return binarySearch(0, arr.length - 1, arr, target);
};

console.log(recursiveBinarySearch([10, 1, 9, 8, 80], 1)); // 0
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 1)); // -1
