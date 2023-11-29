// Strings
// 1-length
// const text = "This is js";
// console.log("Length is ", text.length); // 10-counted spaces too.

// 2-Extracting parts
// There are three methods of extracting a part of string :
// a) .slice()
// b) .substr() // same as .slice // if the 1st parameter is negative, counts from last
// c) .replace()

let text: string = "Apple is good";
console.log(text);
let temp = text.slice(3, 10); // 10 is not included
console.log(temp); // le is g
