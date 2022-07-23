const arr = [1,2,2,9,4,7]
const distinctionSum = arr => {
    let res = 0;
    for(let i=0; i<arr.length; i++){
        if(i== arr.lastIndexOf(arr[i])){
            res += arr[i]
        };
        continue;
    };
    return res;
};
console.log(distinctionSum(arr));