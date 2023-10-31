// Tower of Hanoi

// Time Complexity = O(2^n)

const recursiveTowerOfHanoi = function (n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    recursiveTowerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    recursiveTowerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

let n = 3;
recursiveTowerOfHanoi(n, "A", "C", "B");
