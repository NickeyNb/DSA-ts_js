// Check whether a string is palindrome or not

// Time Complexity = O(n/2);

class Solution {
    isPalindrome(S: string): number {
        for (let i = 0; i < S.length; i++) {
            if (S[i] != S[S.length - 1 - i]) {
                return 0;
            }
        }
        return 1;
    }
}

const soln = new Solution();
const result = soln.isPalindrome("nitin");
console.log(result);
