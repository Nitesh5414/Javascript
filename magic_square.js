
function magicSquare(arr)
{
	var N = arr.length

	var sumd1 = 0,sumd2=0;
	for (var i = 0; i < N; i++)
	{

		sumd1 = sumd1 + arr[i][i];
		sumd2 = sumd2 + arr[i][N-1-i];
	}

	if(sumd1!=sumd2)
		return false;

	
	for (var i = 0; i < N; i++) {
		var colSum = 0;
		var rowSum = 0;
		for (var j = 0; j < N; j++)
		{
			rowSum += arr[i][j];
			colSum += arr[j][i];
		}
		if (rowSum != colSum || colSum != sumd1)
			return false;
	}
	return true;
}

var arr = [[ 2, 7, 6 ],
		   [ 9, 5, 1 ],
		   [ 4, 3, 8 ]];

if (magicSquare(arr))
	console.log( "Array is Magic Square");
else
	console.log( "Array is not a Magic Square");
