// Quick Sort
// Given an array of integers, sort the array

// Time Complexity = worst case = O(n^2) = when already sorted, averaege case = O(n log n)

function quickSort(arr: number[]): number[] {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1]; // taking pivot as last element
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 2, 6, -1, 4])); // [-1, 2, 4, 6, 10]
