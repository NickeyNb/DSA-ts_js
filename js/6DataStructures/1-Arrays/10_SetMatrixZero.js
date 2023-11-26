// 73. Set Matrix Zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
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
