
  const MAX_SIZE = 1000001;
 

  var isPrime = Array.from({ length: MAX_SIZE }, (_, i) => true);
  var prime = [];
  var SPF = Array.from({ length: MAX_SIZE });
 
  
  function manipulated_sieve(N) {
   

    isPrime[0] = isPrime[1] = true;
 
  
    for (let i = 2; i < N; i++)
    {
     
      if (isPrime[i])
      {
        
        prime.push(i);
 
        // A prime number is its own smallest
        // prime factor
        SPF[i] = i;
      }
 
      
      for (
        let j = 0;
        j < prime.length && i * prime[j] < N && prime[j] <= SPF[i];
        j++
      ) {
        isPrime[i * prime[j]] = false;
 
        // put smallest prime factor of i*prime[j]
        SPF[i * prime[j]] = prime[j];
      }
    }
  }

  var N = 13; 
 
  manipulated_sieve(N);
   
  
  for (let i = 0; i < prime.length && prime[i] <= N; i++) {
    console.log(prime[i] + " ");
  }