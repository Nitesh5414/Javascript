

function reverseANum(a) {

    let ans = 0;
  
    while (a > 0) {
  
      let lastDig = a % 10;
  
      ans = ans * 10 + lastDig;
  
      a = Math.floor(a / 10);
  
    }
  
    console.log(ans) ;
  
  }
  
  reverseANum(923);
  
  