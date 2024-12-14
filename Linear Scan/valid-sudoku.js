/**
Title: Valid Sudoku

Description:
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 * Big O complexity: O(n^2), The code contains nested loops that iterate over the entire board, resulting in a time complexity of O(n^2), where n is the size of the board.
 */
var isValidSudoku = function (board) {
    let numbersRow = "";
    let numersCol = "";
    let numersSubBox = "";
    let subBoxRow = 0;
    let subBoxCol = 0;
    for (let i = 0; i < board.length; i++) {
        numbersRow = "";
        numersCol = "";
        numersSubBox = "";
        for (let j = 0; j < board.length; j++) {
            const elementRow = board[i][j];
            const elementCol = board[j][i];
            if (!elementRow.includes(".")) {
                if (!numbersRow.includes(elementRow))
                    numbersRow += elementRow;
                else
                    return false;
            }
            if (!elementCol.includes(".")) {
                if (!numersCol.includes(elementCol))
                    numersCol += elementCol;
                else
                    return false;
            }
            const elementSubBox = board[subBoxRow][subBoxCol];
            subBoxCol++;

            if ((j + 1) % 3 === 0) {
                subBoxCol -= 3;
                subBoxRow++;
            }
            if (!elementSubBox.includes(".")) {
                if (!numersSubBox.includes(elementSubBox))
                    numersSubBox += elementSubBox;
                else
                    return false;
            }
        }

        if ((i + 1) % 3 === 0) {
            subBoxCol = 0;
        } else
            subBoxCol += 3;
        if ((i + 1) % 3 !== 0)
            subBoxRow -= 3;
    }
    return true;
};

module.exports = isValidSudoku;