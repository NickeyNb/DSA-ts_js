// Arrays
/**
*1- An array is a ds that can hold a collection of values
*2- Arrays can contain a (mix of different data types). You can store strings, booleans, numbers, or even objects all in the same array.
*3- Arrays are (resizable). You don't have to declare the size of an array before creating it.
*4- Js arrays are 0-indexed and the insertion order is maintained.
*5- Arrays are (iterables). They can be used with a for-of loop.

* Time Complexities
    - Insert/ remove from end = O(1)
    - Insert/ remove from beginning = O(n)
    - Access an element = O(1)
    - Searching an element = O(n)

* Time Complexities of some array methods
    - push/pop = O(1)
    - shift/unshift/concat/slice/ = O(n)
    - forEach/map/filter/reduce = O(n)

*/

// Basic array methods
/**
 * 
const arr = [1, "Two", 3, "Four"];
console.log(arr); // [1, 'Two', 3, 'Four']
console.log(arr[0]); // 1
console.log(arr[1]); // Two

arr.push("Five", 6);
console.log(arr); // [1, 'Two', 3, 'Four', 'Five', 6]
arr.pop();
console.log(arr); // [1, 'Two', 3, 'Four', 'Five']

console.log(arr.shift()); // 1
console.log(arr); // ['Two', 3, 'Four', 'Five']

console.log(arr.unshift("Zero")); // returns new length of arr
console.log(arr);

for (const item of arr) {
    console.log(item);
}
*/

// ============
// map, filter, reduce, concat, slice, splice
/**
 * 
// map
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

const nums = [1, 2, 3, 4];
const newArr = nums.map(myFunc);
function myFunc(num) {
    return num * 10;
}
console.log(newArr);
// using arrow function
const arr = nums.map((item) => item * 5);
console.log(arr);
*/
// -------

/**
 * 
// filter
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];
const result = ages.filter(myFunc);
function myFunc(age) {
    return age >= 18;
}
console.log(result); // [32, 33, 40]

*/
// ---------
// reduce

// const ages = [10, 20, 30, 40];
// const result = ages.reduce(myFunc, 0);

// function myFunc(total, age) {
//     return total + age;
// }
// console.log(result); // 100

// --------------------
// const ages = [32, 33, 16, 40];
// ages.forEach((age) => {
//     return console.log(age);
// });

//-------------
// splice()
const ages = [32, 33, 16, 40];
// ages.splice(2, 2);
console.log(ages); // original array modified // [32, 33]
// ages.splice(2, 0, 1, 2);
console.log(ages); // [32, 33, 1, 2, 16, 40]

ages.splice(2, 2, 1, 2); // delete 2 items from 2nd index and after delete add 1 & 2
console.log(ages);

// ======================
