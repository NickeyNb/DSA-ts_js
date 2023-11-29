// Power of 2
// Given a number 'n', determine if the number is a power of 2 or not
// Time Complexity - Method-1 =  O(log n) ; Method-2 = O(1)

const powerOfTwo = (n: number): boolean => {
    while (n != 1) {
        let rem = n % 2;
        if (rem === 1) {
            return false;
        }
        n = n / 2;
    }
    return true;
};
console.log(powerOfTwo(32)); // true
console.log(powerOfTwo(18)); // false

// ==========================================

//  using Bitwise AND(&) operator
const powerOfTwoBitwise = (n: number): boolean => {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
};
console.log(powerOfTwo(32)); // true
console.log(powerOfTwo(18)); // false
