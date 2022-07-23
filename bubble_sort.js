const bubbleSort = (arr) => {
    //shorthand for the length of the array 
    let n = arr.length;

    //iterate n times over the array
    for (let i = 0; i < n; i++) {
        //track whether any swaps were performed in this iteration
        let swapped = false;

        //visit each pair of elements in the array
        for (let j = 0; j < n - i - 1; j++) {
            //if they are out of order, swap them
            if (arr[j] > arr[j + 1]) {
                // let tmp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = tmp;
                
                [arr[j], arr[j + 1]] = [arr[j + 1] , arr[j]]
                swapped = true;
            }
            
        }
        console.log(arr)
        //if there were no swaps, the array is already in sorted
        if(!swapped){
            break;
        }
    }

    return arr;
};

const arrayOne = [19,2,11,6,1];
bubbleSort(arrayOne);
console.log(`arrayOne: ${arrayOne}`);
