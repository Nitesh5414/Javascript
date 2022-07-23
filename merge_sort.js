//Merge two sorted array

// function MergeSortedArrays(a1, a2){
//     let res = []
//     let p1 = 0;
//     let p2 = 0;
//     let k = 0;
//     while(p1 < a1.length && p2 < a2.length){
//         if(a1[p1] < a2[p2]){
//             res[k] = a1[p1];
//             p1++;
//             k++;

//         }
//         else{
//             res[k] = a2[p2]
//             p2++;
//             k++;
//         }
//     }
//     if(p1 == a1.length){
//         while(p2 != a2.length){
//             res[k] = a2[p2];
//             k++;
//             p2++;
//         }

//     }
//     if(p2 == a2.length){
//         while(p1 !=a1.length){
//             res[k] = a1[p1];
//             k++;
//             p1++;
//         }
//     }
//     return res;

// }
// console.log(MergeSortedArrays([2,4,5,6],[1,3,4,8]))


//using push method

// function MergeSortedArrays(a1,a2){
//     //Create an array 
//     let res = [];
//     let p1 = 0; //a1
//     let p2 = 0; //a2
//     let k = 0; //res
//     while(p1 < a1.length && p2 < a2.length){
//         if(a1[p1] < a2[p2]){
//             res.push(a1[p1]);
//             p1++;
//             k++;
//         }
//         else{
//             res.push(a2[p2]);
//             p2++;
//             k++;
//         }
//     }
//     if(p1 == a1.length){
//         while(p2 != a2.length){
//             res.push(a2[p2]);
//             k++;
//             p2++;
//         }
//     }
//     if(p2 == a2.length){
//         while(p1 != a1.length){
//             res.push(a1[p1]);
//             k++;
//             p1++;
//         }
//     }
//     return res;
// }
// console.log(MergeSortedArrays([2,4,5,6],[1,3,4,8]));

function merge(arr1, arr2) { 
    let i = 0; let j = 0; 
        let result = []; 
        while(i<arr1.length && j<arr2.length) { 
            if(arr1[i] < arr2[j]) { 
                result.push(arr1[i]); i++; } 
            else { 
                result.push(arr2[j]); j++; 
            } 
        }
            while(i<arr1.length) { 
                result.push(arr1[i++]); } 
                while(j<arr2.length) { 
                    result.push(arr2[j++]); } 
            return result; 
        } 
let result = merge([1,3,5], [2,4,8,10]); 