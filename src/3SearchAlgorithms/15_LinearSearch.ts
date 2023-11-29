// Linear Search
// Given an array of 'n' elements and a target element 't', find the index of 't' in the array.
// Return -1 if the target element is not found.

// Time Complexity = O(n)

function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 1)); // -1
