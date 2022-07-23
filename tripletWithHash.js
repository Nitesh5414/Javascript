function findTriplets(arr){
    let n = arr.length;
    for(let i = 0; i< n-1 ; i++){
        let set = new Set();
        for(j= i+1; j<n;j++){
            let checkNo = -(arr[i]+arr[j]);
            if(set.has(checkNo)){
                console.log(checkNo,arr[i],arr[j]);
            }
            else{
                set.add(arr[j]);
            }
        }
    }
}
// findTriplets([1,-5,2,0,3,2,-2]);
findTriplets([1,-1,2,0,3,1,-2])