var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i]
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 2; j < arr.length; j += 2){
            for(let t = i; t <= j; t++){
                result += arr[t];
            }
        }
    }

    return result;
};

console.log(sumOddLengthSubarrays([1,4,2,5,3]))