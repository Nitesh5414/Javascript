function getCount(n) {
    var count = 0;
  
    while (n != 0) {
      count = count + 1;
      n = n / 10;
    }
  
    return count;
  }
  
  function getDigitSum(num) {
  
    var sum = 0;
    if (getCount(num) < 3) {
      return -1;
    }
  
    num = Math.floor(num / 10);
    sum = sum + num % 10;
  
    while (Math.floor(num / 100) != 0) {
      num = Math.floor(num / 10);
      sum = sum + num % 10;
    }
    return sum;
  }
  
  
  
  var n = 222314;
  console.log(getDigitSum(n));
  