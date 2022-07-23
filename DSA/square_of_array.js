/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
 */


function sqaureArray(arr){
    n = arr.length
    square = [];
    for(let i=0; i<n; i++){
        sqr = arr[i] * arr[i]
        square.push(sqr)
    }
    square.sort(function(a, b) {
        return a - b;
      });
    return square;
}
nums = [-4,-1,0,3,10]

console.log(sqaureArray(nums))