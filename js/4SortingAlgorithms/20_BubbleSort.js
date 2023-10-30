// Bubble Sort
// Given an array of integer, sort the array.

// Time Complexity = O(n^2)

const bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort([10, 2, 6, -1, 4])); // [-1, 2, 4, 6, 10]
