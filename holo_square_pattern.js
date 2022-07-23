//#############Square##############
​
//Logic : Row 1 or 4 => Print entire stars
//        Col 1 or 4 => Print entire stars            
​
/*
    * * * *
    *     *
    *     *
    * * * *  
*/
​
var n =6;
var output="";
for(row=1;row<=n;row++){
    for(col=1;col<=n;col++){
        if(row==1||row==n){
            output=output+"* "
        }
        else{ // row 2 and 3
            if(col==1||col==n){
                output=output+"* "
            }
            else{
                output=output+"  "
            }
        }
​
    }
    output = output+"\n"
}
console.log(output)
