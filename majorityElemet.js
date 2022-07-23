/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

let maxCount = 0
function majorityElement(arr){
    n = arr.length;
    for(let i=0; i<n; i++){
        count=0;
        for(j=0; j<n; j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(maxCount<count){
            maxCount = count
            index = i
        }
    }
    if(maxCount>n/2){
        console.log(arr[index])
    }
    else{
        console.log("No Majority Element")
    }
}

arr = [ 1, 1, 2, 1, 3, 5, 1 ]
majorityElement(arr)