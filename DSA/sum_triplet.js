// var threeSum = function(array) {
//     array.sort((a,b) => a - b);
//     const triplets = [];

//     for(let i=0; i < array.length - 2; i++){
//         if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
//             let left = i + 1;
//             let right = array.length - 1;

//             while (left < right){
//                 const currentSum = array[i] + array[left] + array[right];
//                 if (currentSum === 0){
//                     triplets.push([array[i], array[left], array[right]]);
//                     while(array[left] == array[left + 1]) left ++
//                     while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
//                     left ++;
//                     right --;
//                 } else if(currentSum < 0) {
//                     left ++
//                 } else if(currentSum > 0){
//                     right --
//                 }
//             }
//         }
//     }
//     return triplets
    
// };
// arr = [1,-1,2,0,3,1,-2]
// console.log(threeSum(arr))

const tripletSum = (arr, num) => {
    if (arr.length === 3) {
       if (arr[0]+arr[1]+arr[2] === 0) {
          return [[arr[0],arr[1],arr[2]]];
       };
    };
    const results = [];
    const hashMap = {};
    for (var i=0; i<arr.length; i++) {
       for (var j=i+1; j<arr.length; j++) {
          for (var k=j+1; k<arr.length; k++) {
             if (arr[i]+arr[j]+arr[k] === num) {
                if (!hashMap[arr[i]*arr[j]*arr[k]]) {
                   results.push([arr[i],arr[j],arr[k]]);
                   results[results.length-1].sort();
                   hashMap[arr[i]*arr[j]*arr[k]] = true;
                }
             }
          }
       }
    }
    return results;
 };

 arr = [1,-1,2,0,3,1,-2]
 num = 0
 console.log(tripletSum(arr, num));