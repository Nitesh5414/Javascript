// var sum = function(array, i) {
//     if(array.length === 0){
//         return 0;
//     }
//   console.log(array[i]);
//   if(i === array.length-1){
//     return array[i];
//   }
//   return array[i] + sum(array, i+1);
// };
// console.log(sum([1, 2, 3, 4, 5, 6],0)) //21

//relevel solution
function arraySum(array, size,sum)
{
    if (size == 0)
        return sum;
    else{
        sum+=array[size-1];
        return arraySum(array,size-1,sum);
    }
}
 
var array = [1,2,3,4,5,6,7,8,9,10];
var size = array.length;
let sum=0;
document.write( "Sum of array: "+arraySum(array, size,sum));