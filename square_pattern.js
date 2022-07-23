/* Logic : no of row = no of col = no of stars
​
1 ****
2 ****
3 ****
4 ****
​
*/
//#############Square##############
 var n = 7;
 var output=""; 
//outer loop
 for(row = 1; row<=n; row++){
     for(col=1; col<=n;col++){
         output=output+"*";
     }
     output=output+"\n";
 }
 console.log(output);
