// Cartesian Product
// Given two finite non-emply sets, find their cartesian product.

// Time Complexity = O(m x n)   // m and n are sizes of 1st and 2nd array respentively.

function cartesianProduct(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr3.push([arr1[i], arr2[j]]);
        }
    }
    return arr3;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));
