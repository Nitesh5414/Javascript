let pre = new Array(1000,0);
 
function preCompute(arr, n)
{
    pre[0] = arr[0];
    for (let i = 1; i < n; i++)
        pre[i] = arr[i] + pre[i - 1];
}
 
// Returns sum of elements in
// arr[i..j]
// It is assumed that i <= j
function rangeSum(i, j, pre)
{
    if (i == 0)
        return pre[j];
 
    return pre[j] - pre[i - 1];
}
 
// Driver code
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
   
// Function call
preCompute(arr, n);
 
console.log(rangeSum(1, 3, pre));
console.log(rangeSum(2, 4, pre));