// Objects in js
/**
 * 1- An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type
 * where as the value can be any data type.
 * 2- To retrive a value, you can use the corresponding key. This can be achieved using the dot notation or bracket
 * notation.
 * 3- An object is (not iterable). You can't use it with for-of loop
 *
 * Time Complexities
 * Insert = O(1)
 * Remove = O(1)
 * Access = O(1)
 * Search = O(n)
 * Object.keys(), Object.values(), Object.entries() = O(n)
 */

// const myObj = {
//     name: "Nitin",
//     age: 21,
//     "gender-male": true,
//     sayMyName: function () {
//         console.log(this.name);
//     },
// };
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["age"]);
// console.log(myObj["gender-male"]);

// myObj.fourth = "fourth";
// myObj["five"] = 5;
// console.log(myObj); // {name: 'Nitin', age: 21, gender-male: true, fourth: 'fourth', five: 5}
// delete myObj.five;
// console.log(myObj);
// myObj.sayMyName();

// ================================================
// Object.keys(), .values(), .entries()
// Object.keys()
// in array
// const fruits = ["A", "B", "C"];
// const keys = Object.keys(fruits);
// console.log(keys);  // ['0', '1', '2']

// in String
// const fruit = "Banana";
// const keys = Object.keys(fruit);
// console.log(keys);  //  ['0', '1', '2', '3', '4', '5']

// in Object
// const myObj = {
//     name: "nitin",
//     age: 21,
// };
// const keys = Object.keys(myObj);
// console.log(keys); // ['name', 'age']
// ----------------------
// Object.values()
// const fruits = ["A", "B", "C"];
// const values = Object.values(fruits);
// console.log(values);

// const myObj = {
//     name: "nitin",
//     age: 21,
// };
// const allValues = Object.values(myObj);
// console.log(allValues);
// ------------------

// Object.entries()
const myObj = {
    name: "nitin",
    age: 21,
};
console.log(Object.entries(myObj));
console.log(Object.entries(myObj)[0]); // ['name', 'nitin']
