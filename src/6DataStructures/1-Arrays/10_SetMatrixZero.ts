// 73. Set Matrix Zeroes
// Time Complexity = O(n^2)
var setZeroes = function (matrix: number[][]): void {
    let m = matrix.length;
    let n = matrix[0].length;
    let zeroes = [];

    // counting zeroes in the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                zeroes.push(i);
                zeroes.push(j);
            }
        }
    }

    let row = 0;
    let col = 1;
    while (row < zeroes.length && col < zeroes.length) {
        for (let i = 0; i < n; i++) {
            matrix[zeroes[row]][i] = 0;
        }
        for (let i = 0; i < m; i++) {
            matrix[i][zeroes[col]] = 0;
        }
        row = row + 2;
        col = col + 2;
    }
};
