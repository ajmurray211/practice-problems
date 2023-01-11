// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let temp = []
    let output = []

    for (let row = 0; row < numRows; row++) {
        temp = []
        for (let j = 0; j < row + 1; j++) {
            if (j == 0 || j == output[row - 1].length) {
                temp.push(1)
            } else {
                let val = output[row - 1][j - 1] + output[row - 1][j]
                temp.push(val)
            }
        }
        output.push(temp)
    }
    return output
};