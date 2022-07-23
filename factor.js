// Given a number A you are supposed to take the digits of that number, and find a permutation such
// that 60 becomes a factor of that permutation. If there exists such a permutation then return 1 else 0.
// Input - 2340
// Output - 1

function isDivisibleBy60(num) {

    if (num % 10 == 0)
      return 1;
  
    var sum = 0;
    last = false;
    secondLast = false;
    while (num != 0) {
      i = num % 10;
      num = num / 10;
      if (i % 2 == 0 && (i > 0 || last))
        secondLast = true;
      if (i == 0)
        last = true;
      sum += i;
    }
  
    if (sum % 3 == 0 && last && secondLast)
      return 1;
    return 0;
  }
  
  var n = 2340;
  console.log(isDivisibleBy60(n));
  