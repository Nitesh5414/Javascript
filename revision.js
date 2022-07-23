//arr=[5,3,8,4,6]

function bubbleSort(arr){
    let n = arr.length

    for(i=0; i<n; i++){
        for(j=0; j<n-i-1; j++){
            if (arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
        console.log(arr)
    }
    return arr
}

bubbleSort([5,3,8,4,6])