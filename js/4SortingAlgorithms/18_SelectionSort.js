// Selection Sort
// Given an array of integer, sort the array.

// Time Complexity = O(n^2)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(selectionSort([10, 2, 6, -1, 4])); // [-1, 2, 4, 6, 10]
