//remove 1st and last digit and sum of remaining digit

var n=321; 
var result=0; 
if (n>99) 
{ 
n=parseInt(n/10) 
while(n>9){ 
result+=n%10
 n=parseInt(n/10)
  } 
console.log(result)
}
else
console.log(-1)
