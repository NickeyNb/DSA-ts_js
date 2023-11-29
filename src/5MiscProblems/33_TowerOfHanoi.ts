// Tower of Hanoi

// Time Complexity = O(2^n)

const recursiveTowerOfHanoi = function (
    n: number,
    fromRod: string,
    toRod: string,
    usingRod: string
): void {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    recursiveTowerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    recursiveTowerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

let rods = 3;
recursiveTowerOfHanoi(rods, "A", "C", "B");
