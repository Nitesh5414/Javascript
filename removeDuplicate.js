/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same
*/

function removeDuplicate(arr){
    n = arr.length
    if(n<=0) return 0
    
    var result=[];
    for(var i=0; i<n; i++){
        if(arr[i]!==arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;

}

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicate(nums))