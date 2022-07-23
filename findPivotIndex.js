/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

function findPivotIndex(nums){
    let left = 0
    let sum = 0

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }

    for(let i = 0; i < nums.length; i++){
        sum -= nums[i]
        if(sum == left) {
        return i
        }
        left += nums[i]
    }

    return -1
    }

arr=[1,7,3,6,5,6];     //output = 3
// arr = [1,2,3]          //output = -1
// arr =[2,1,-1]             // output = 0
console.log(findPivotIndex(arr));