const input =
`MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const matrix = input.split('\n').map(r => r.split(''));
const pattern = 'XMAS';

class Matrix {
    directions = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
    constructor(matrix) {
        this.matrix = matrix;
        this.rows = matrix.length;
        this.cols = matrix[0].length;
    }

    checkDirection(pattern, row, col, dir) {
        let patternFound = true;
        for (let i = 0; i < pattern.length; i++) {
            const nRow = row + (dir[0] * i);
            const nCol = col + (dir[1] * i);
            
            if (
                !(nRow >= 0 && nRow < this.rows && nCol >= 0 && nCol < this.cols)
                || this.matrix[nRow][nCol] !== pattern[i]
            ) {
                patternFound = false;
                break;
            }
        }
        return patternFound;
    }

    findPatternCount(pattern) {
        let count = 0;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                // find first char in the pattern and then check all directions
                if (this.matrix[row][col] === pattern[0]) {
                    for (const dir of this.directions) {
                        if (this.checkDirection(pattern, row, col, dir)) {
                            count++;
                        }
                    }
                }
            }
        }
        
        return count;
    }
}

console.log(new Matrix(matrix).findPatternCount(pattern));
