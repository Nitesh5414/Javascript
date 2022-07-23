// Given two numbers A and B, You are supposed to find A to power B without using any built -in
// function.
// Input - num=10, power=2
// Output - 100

// method 1
// function computePower( num,  power)
// {
//      var result = 1;
  
//      while (power > 0) {
//           result = result * num;     
//      power -=1;
//      }
//      return result
//  }




//    var number = 10;
//    var power = 2;
//    console.log(computePower(number,power));


//method 2

function computePower(num, power) {
    var result = 1;
  
    while (power > 0) {
      if ((power & 1) == 1)
        result = result * num;
  
      power = power >> 1;
      num = num * num;
    }
    return result;
  }
  
  
  var number = 10;
  var power = 2;
  console.log(computePower(number, power));
  
