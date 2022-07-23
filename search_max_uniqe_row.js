//Find the row index which has maximum no. of unique elements in a matrix efficiently.
function search(mat){
let n = mat.length;
let max = 0 
let index = 0

for(let row=0; row<n; row++){
	let arr_obj = {} //creating new obj for new row
	let count = 0
	for(let col=0; col< n; col++){
	//updating the obj with row elements
	if(!(mat[row][col] in arr_obj)){
		arr_obj[mat[row][col]] = 0
	}
	else{
		arr_obj[mat[row][col]] += 1
	}
	}
	//traversing obj keys for unique elements
	for(let key in arr_obj){
	if(arr_obj[key] == 0){
		count+=1
	}
	}
	if(count>max){
	max = count
	index = row
	}
}
	return `${index+1}th row has maximum no of unique elements`
}

let mat = [[10,20,20],
		   [40,63,60],
		   [62,62,62],
		   [0,0,100]]
console.log(search(mat))

