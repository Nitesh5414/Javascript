//sum of three no is 0

function findTriplet(arr){
    n = arr.length
    for(i=0; i<n-2; i++){
        for(j=i+1; j<n-1; j++){
            for(k=j+1; k<n; k++){
                if(arr[i]+arr[j]+arr[k]===0){
                    console.log(arr[i], arr[j],arr[k])
                }
            }
        }
    }
}
arr = [1,-1,2,0,3,1,-2]
findTriplet(arr)