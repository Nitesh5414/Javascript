function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j<high; j++){
        if(arr[j]<pivot){
            i++;
            [arr[j], arr[j+1]] = [arr[i], arr[j]]
            
        }
    }
}