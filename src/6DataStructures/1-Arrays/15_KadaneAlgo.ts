// 53. Maximum Subarray
// Time Complexity = O(n)

function KadaneAlog(fifteen: number[]): number {
    let mx = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < fifteen.length; i++) {
        sum += fifteen[i];
        if (sum > mx) {
            mx = sum;
        }
        // if sum<0, element not taken
        if (sum < 0) {
            sum = 0;
        }
    }
    return mx;
}

let fifteen = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(KadaneAlog(fifteen));
