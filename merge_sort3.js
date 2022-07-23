function merge(arr1, arr2) { 
    let i = 0; 
    let j = 0; 
    let result = []; 
    while(i<arr1.length && j<arr2.length) { 
        if(arr1[i] < arr2[j]) { 
            result.push(arr1[i]); 
            i++; 
        } 
        else { 
            result.push(arr2[j]); 
            j++; } 
        } 
    while(i<arr1.length) { 
        result.push(arr1[i++]); 
        } 
    while(j<arr2.length) { 
        result.push(arr2[j++]); 
        } 
    return result; 
    } 

let result1 = merge([5,6,3,2,8], [4,1,7,9]); 

console.log(result1)
    
function mergeSort(arr) { 
    if(arr.length == 1) { 
        return arr; } 
    let mid = Math.floor(arr.length/2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid));
    return merge(left, right); 
} 
let result = mergeSort([5,6,3,2,8]); 

console.log(result)