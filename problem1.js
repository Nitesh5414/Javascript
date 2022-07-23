/*var arr = [1,3,2,2,5]

Output: [1,5,2,3,2]  */

var arr=[1,3,2,2,5]
arr.sort()
var newarr=[]
for(var i=0;i<Math.floor(arr.length/2);i++){
  newarr.push(arr[i])
  newarr.push(arr[arr.length-i-1])
}
if(arr.length==newarr.length)
console.log(newarr)
else
{
  newarr.push(arr[arr.length-i-1])
  console.log(newarr)
}

9028349080

