// let arr=[7,3,5,4,5,3,4]; 
// for(let i=0;i<arr.length;i++)
// { let notunique; 
//     for(let j=i+1;j<arr.length;j++){
//          if(arr[i]==arr[j])
//              arr[j]=0;
//             notunique=arr[i];
            
//     }}

//////////////////////////////////////////////////////////////////////

// var returnedValue = Math.max(2,5,6,9,10);
// console.log(returnedValue); //5

// var myObj = {};
// Object.assign(myObj,{a:1, b:2, c:3}, {z:9,y:8,x:7});
// console.log(myObj);
/******************************************************/
// function sumOne(...args){
//     console.log(args)
//     let sum = 0;
//     for(let arg of args){
//         console.log(arg)
//         sum+=arg;
//     }
//     console.log(sum)
//     return sum;
// }

// sumOne(2,3,4,7,8,9,35,41)

/******************************************************/
//first 2 args => multiply
//remaining one => added 
//return [sum,mul]


///////////////////////////////////////////////
// let myMap = new Map([['name','John'], ['surname','Doe']]);

// console.log(myMap);

// let myObj = {};
// let a = {"test":"test"};
// let b = {"test1":"test1"};

// myObj[a]= 'a';
// console.log(myObj)
// myObj[b]= 'b';
// console.log(myObj)

/*******************************************/
// let a = {};
// let b = {};

// let myMap = new Map([[1,'a'],[1,'b']])
// myMap.set({},'c');
// myMap.delete(1)
// console.log(myMap)

///////////////////////////////////////
index = [1,2,3,4,5,10]
arr = [1,2,5,10,3,4]

myMap = new Map([index, arr])
console.log(myMap)

