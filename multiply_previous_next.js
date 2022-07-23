// Replace every array element by multiplication of previous and next

// function modify(arr, n)
// {
//     // Nothing to do when array size is 1
//     if (n <= 1)
//       return;
 
//     // store current value of arr[0] and update it
//     let prev = arr[0];
//     arr[0] = arr[0] * arr[1];
 
//     // Update rest of the array elements
//     for (let i = 1; i < n - 1; i++)
//     {
//         // Store current value of next interaction
//         let curr = arr[i];
 
//         // Update current value using previous value
//         arr[i] = prev * arr[i+1];
 
//         // Update previous value
//         prev = curr;
//     }
 
//     // Update last array element
//     arr[n-1] = prev * arr[n-1];
// }
 
// // Driver program
// let arr = [2, 3, 4, 5, 6];
// let n = arr.length;
// modify(arr, n);
// for (let i = 0; i < n; i++)
//     console.log(arr[i] + " ");

function modifyArray(a, n)
{
    // store current value of arr[0] and update it
    let prev = a[0];
    a[0] = a[0] * a[1];
 
    for (let i = 1; i < n - 1; i++)
    {
        // Storing current value 
        let curr = a[i];
 
        // Update current value with product of previos and next elements
        a[i] = prev * a[i+1];
 
        // Update previous value
        prev = curr;
    }
 
    // Updating last element of the array 
    a[n-1] = prev * a[n-1];
    return a;
}
 

let a = [2, 3, 4, 5, 6];
let n = a.length;
console.log(modifyArray(a, n));
