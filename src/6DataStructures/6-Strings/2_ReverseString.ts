// Reverse a string
// Time Complexity = O(n/2)

let reverseString = function (s: string[]): void {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp;
    }
    console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
