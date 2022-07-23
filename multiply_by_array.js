// relevel solution

// const arr = [1,2,3,4,5];
// let res = arr.reduce((prod, curr) => prod*curr,1);
// console.log(res);

// OR
var arr = [ 1, 2, 3, 4, 5, 6 ];

    function multiply() {
        var pro = 1;
        for (i = 0; i < arr.length; i++)
            pro = pro * arr[i];
        return pro;
    }
 
console.log(multiply());