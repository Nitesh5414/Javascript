/* Requirements: "Given an array having 0,1 as input( We need to write a function that sorts the array in ascending
    order without using inbuilt sort function
    Input Array -> [0,1,1,0,1,0,0,15
    Output -> [0,0,0,0,1,1,1,15" */

    // var numArray = [0,0,0,0,1,1,1,15];
    // for (var i = 0; i < numArray.length; i++) {
    //     var target = numArray[i];
    //     for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
    //         numArray[j+1] = numArray[j];
    //     }
    //     numArray[j+1] = target
    // }
    // console.log(numArray);

//method 2

var input = [1,1,1,0,0,1,1,0,0,0,1,0,1,0,1];
var size = input.length;
// function to sort an array containing 0,1, and return the sorted array 
function sortZeroOne(input, size) {
  let mid = 0;
  let end = size-1;
  let swap = 0; //variable for swapping 
  while (mid <= end) {
    if (input[mid] == 0) {
      mid++;
    } else {
      swap = input[end];
      input[end] = input[mid];
      input[mid] = swap;
      end--;
    }
  }
  return input;
}

var output = sortZeroOne(input, size);
console.log(output);
