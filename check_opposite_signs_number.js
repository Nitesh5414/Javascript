function oppositeSigns(x,y)
{
    const product = Number(x)*Number(y);
    return (product<0);
}
 
// driver code
let x = 100, y = -50;

if(oppositeSigns(x, y) == true)
{
    console.log("Signs are opposite");
}
else console.log("Signs are not opposite");
   
