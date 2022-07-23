function getBinary(a) {

    let ans = "";
  
    while (a > 0) {
  
      let tp = a % 2;
  
      ans += tp;
  
      a = Math.floor(a / 2);
  
    }
  
    // reverse the ans
  
    return ans;
  
  }
  
  // 2
  
  // 10
  
  // 10
  
  // 1010
  
  console.log(getBinary(25));