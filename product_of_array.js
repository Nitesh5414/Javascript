/*
Product of Array Except Self:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.


Example:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

*/

function productOfArrayExceptSelf(array){
    var resultArray = [], product;
    for(let i = 0; i < array.length; i++){
      product = 1;
      for(let j = 0; j < array.length; j++){
         if(i !== j) {
         product *= array[j];
         }
      }
      resultArray.push(product);
    }
    return resultArray;
}
// nums = [-1,1,0,-3,3];
nums = [1,2,3,4]
console.log(productOfArrayExceptSelf(nums))


// var productExceptSelf = function(nums) {
//     // Value to increment per each index
//     let carry = 1
//     // Array to return all the product values
//     const output = Array(nums.length).fill(1)
//     // Add products to output array starting at the front
//     for(let i = 0; i < nums.length;i++){
//         output[i]*=carry
//         carry*=nums[i]
//     }
//     // Reset carry
//     carry = 1
//     // Add products to output array starting at the back
//     for(let i = nums.length-1; i >= 0; i--){
//         output[i]*=carry
//         carry*=nums[i]
//     }
//     return output
// };
// nums = [-1,1,0,-3,3]

// console.log(productExceptSelf(nums))