/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

function runningSum(nums){
    let sum=0;
    var result = []
    let n= nums.length;
    for(let i=0; i<n; i++){
        sum = sum + nums[i]
        result.push(sum)
        
    }
    console.log(result)
}

nums = [1,2,3,4]
runningSum(nums)