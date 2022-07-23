let n = 9

function checkIfDivisibleBy2(n){
    for(i=0; i<n; i++){
   if(n%2==0){
	   console.log("It is divisible by 2");
       break;
   }
   else{
	   console.log("It is not divisible by 2");
       break;
   }
}
}
checkIfDivisibleBy2(n);