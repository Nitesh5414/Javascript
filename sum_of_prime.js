// Given a number A which is an even integer, you need to print two prime numbers whose sum will be
// equal to A.
// Constraint: A>2
// Input - 4
// Output - 2,2

function isPrime(n) {
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  
  function sumPrime(n) {
    for ( j = 2; j <= n/2; j++) {
      if (isPrime(j) && isPrime(n - j)) {
        console.log(j + "," + (n - j));
      }
    }
  }
  
  var n = 15;
  sumPrime(n);

  //output = 2, 13