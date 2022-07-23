/*You are given an integer array height, where each element of an array represents a student's height. Students were
asked to stand in a non-decreasing order (small to large) on the basis of their height. The given array represents the
current position of each student. You have to figure out how many students are not at their expected position i.e
heights[i] != expected[i], where expected represents the correct position */



function standingRows(heights) {

    // so that we can copy heights array
  
    // let initialArray = heights won't work because we are not actually copying the array there
  
    // we are copying the address or pointer to those arrays.
  
    let initialArray = heights.map((x) => x);
  
    let expectedArray = heights.map((x) => x);
  
    expectedArray.sort((a, b) => a - b);
 
    // both of them will have same length
  
    let ans = 0;
  
    for (let i = 0; i < initialArray.length; i++) {
  
      if (expectedArray[i] !== initialArray[i]) {
  
        ans++;
      }
    }
    console.log(initialArray, expectedArray);
  
    console.log(ans);
  }
 
  standingRows([1, 1, 4, 2, 1, 3]);
  
  