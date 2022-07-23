/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

*/

//1st solution

// var moveZeroes = function(nums) {
//     var i, temp;

//     for (i = 0; i < nums.length-1; i++) {
//         if(nums[i] === 0) {
//             temp = nums.splice(i, 1);
//             nums.push(temp[0]);
//         }
//     }
//     return nums;
// };

// console.log(moveZeroes([1, 2, 0, 7, 9, 0, 3, 0]))


//2nd Solution
function shift(arr) {
    let i = 0;
    let j = arr.length - 1;
  
    while (j > i) {
      if (arr[i] === 0) {
        // swapping the numbers --->
        let last = arr[j];
        arr[j] = arr[i];
        arr[i] = last;
        j--;
      } else {
        i++;
      }
    }
  
    return arr;
  }
  
  let arr = [0,0,1]
  shift(arr)
  console.log(arr);

