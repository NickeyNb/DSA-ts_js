// Insertion sort
// Given an array of integers, sort the array
// In this we divide the array in sorted and unsorte part and perform shifting.

// Time complexity = O(n^2)

const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
};

console.log(insertionSort([10, 2, 6, -1, 4])); //[-1, 2, 4, 6, 10]
