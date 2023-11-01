// Map
/**
 * 1- A map is an unordered collection of key-values pairs.
 * Both keys and values can be of any data type.
 * 2- To retrive a value, you can use the corresponding key.
 * 3- They are (iterables). That can be used with for-of loop.

 */
const map = new Map([
    ["a", 1],
    ["b", 2],
]);

map.set("c", 3);
map.delete("c");
console.log(map.size); // 2
// map.clear();
for (const [key, val] of map) {
    console.log(`${key} = ${val}`);
}

// ======
