// Set
/**
 * 1- A set is a ds that can hold a collection of values.
 * The values however must be unique.
 * 2- Set can contain a mix of different data types.
 * You can store strings, boolean, etc all in same set.
 * 3- Sets are dynamically sized.
 * 4- Sets do not maintain an insertion order.
 * 5- Sets are (iterables). They can used with a for-of loop.
 *
 * Set vs Array
 * 1- Arrays can contain duplicate values but set can't.
 * 2- Insertion order in maintained in array but not in sets.
 * 3- Searching & deleting an element in the set is faster as compared to arrays.
 *
 * // Time Complexities
 */

// To create new set, we use Set constructor

const set = new Set([1, 2, 3]);
// console.log(set); //  {1, 2, 3}
// console.log(set[0]); // undefined
set.add(4);
set.add(4);
set.delete(4);
console.log(set.has(4)); // false
console.log(set.size); // 3
set.clear();

console.log(set); // size=0;

for (const item of set) {
    console.log(item);
}
