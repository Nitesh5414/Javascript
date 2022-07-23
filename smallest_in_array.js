let arr=[5,4,3,6,4,2];


let smallestnum=arr[0];


for(let i=1;i<arr.length;i++){


if(arr[i]<smallestnum){


smallestnum=arr[i];


}


}


console.log("Smallest element in array is ",smallestnum);