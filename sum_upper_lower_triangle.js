//Input array

// var mat = [ [ 11, 2, 2, 20 ],

//             [ 5, 16, 20, 7 ],

//             [ 1, 13, 5, 16 ],

//             [ 6, 7, 18, 15 ] ];

                

//execute the logic

// unique(mat, R, C);

// arrary of size 5

// 0  1.  2. 3.  4

// [0, 0, 1, 0, 1]

// [2,4,1]

// arr[2]++

// arr[4]++

// arr[1]++

function triangleSum(mat){

    // console.log("jj") ;

  let i,j;

  let us = 0;

  let ls = 0;


  for(i=0;i<mat.length;i++)

    for(j=0; j < mat[0].length;j++){

      if(i<=j){

        us+= mat[i][j];

      }

    }

    

    

  console.log('upper triangle sum is: ' + us);

  

  for(i=0;i<mat.length;i++)

    for(j=0; j < mat[0].length;j++){

      if(j<=i){

        ls+= mat[i][j];

      }

    }

  console.log('lower triangle sum is: ' + ls );

}

let mat=[[2,15,4],

         [1,2,15],

         [2,10,7]] ;

triangleSum(mat) ;