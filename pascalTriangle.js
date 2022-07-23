/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

             [1],
            [1,1],
           [1,2,1],
          [1,3,3,1],
         [1,4,6,4,1]]

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function(numRows) {
    let result = [];
    
    for(let i = 0; i < numRows; i++)
    {
        result[i] = [];
        result[i][0] = result[i][i] = 1;
        for(let j = 1; j < i; j++)
        {
               result[i][j] = result[i-1][j] + result[i-1][j-1]; 
        }
    }
    return result;
};
console.log(generate(5))