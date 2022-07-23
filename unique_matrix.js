function unique(mat, n, m)

{

    

    

    var maximum = 0, flag = 0;

    for(var i = 0; i < n; i++)

        for(var j = 0; j < m; j++)

        

            // Find maximum element in a matrix

            if (maximum < mat[i][j])

                maximum = mat[i][j];

    

    

    // Take 1-D array of (maximum + 1) size

    var b = Array(maximum+1+5).fill(0);

    for(var i = 0 ; i < n; i++)

        for(var j = 0; j < m; j++)

            b[mat[i][j]]++;

    

    // lenght of array 20 with values 0

    // b[11] = b[11] + 1 = 0 + 1 = 1

    // b[2]++ = 1

    // b[2] = 2

    

    // b = [0, 0, 2, ........]

    // Print unique element

    for(var i = 1; i <= maximum; i++)

        if (b[i] == 1)

            console.log(i + " ");

            flag = 1;

    

    // arr = [-5, -4, -2, 1, 0, 2]

    

    // minvalue = -5

    

    // arr = [0, 1, 3, 6, 5, 7]

    

    // unibque elements are 0, 1, 3, 7

    // while printing 0-5, 1-5, 3-5, 7-5

    // final ans = -5, -4, -2, 2

            

    if (flag == 0)

    {

        console.log("No unique element found");

    }

}

// arr = [1,2,3,4,5,0,1,2]

// hash = [0,0] => [0, 1, 0, 0, 0] => [0, 1, 1, 0, 0] => 

// hash.lenght = 2

// hash[4]++

// 0.  1. 2. 3. 4

// [2, 3, 1, 0, 1]

// there are one 1

// there are one 2

// iterate arr

// 1

// hash[1]++

// 2

// hash[2]++ 

//Input array

var mat = [ [ 11, 2, 2, 20 ],

            [ 5, 16, 20, 7 ],

            [ 1, 13, 5, 16 ],

            [ 6, 7, 18, 15 ] ];

                

//execute the logic

unique(mat, 3, 3);

// arrary of size 5

// 0  1.  2. 3.  4

// [0, 0, 1, 0, 1]

// [2,4,1]

// arr[2]++

// arr[4]++

// arr[1]++