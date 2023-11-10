// Reverse a string
// Time Complexity = O(n/2)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp;
    }
    console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
