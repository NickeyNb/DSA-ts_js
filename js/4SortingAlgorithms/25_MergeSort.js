// Merge Sort
// Given an array of integers, sort the array

// Time complexity = O(n logn)

/**
 * 
The shift() method removes the first item of an array.
The shift() method changes the original array.
The shift() method returns the shifted element.
*/
const merge = (left, right) => {
    const sortedArr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArr.push(left.shift()); // .shift remove element from left
        } else {
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr, ...left, ...right];
};
const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([10, 2, 6, -1, 4])); // [-1, 2, 4, 6, 10]
