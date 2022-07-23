//Given a 1D array of size 10 , convert it into a 2D array of size 2x5

let A=[1,2,3,4,5,6,7,8,9,10]
let M = []
let n = A.length
let num_row=5;
for(let i=0;i<n;i=i+num_row){
    M.push(A.slice(i,i+num_row))
}
console.log(M);