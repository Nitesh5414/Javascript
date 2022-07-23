// Can you explain printing wave matrix 

// Of aaray..?

 

// Wave Matrix....
var mat = [ [ 11, 2, 2, 20 ],

            [ 5, 16, 20, 7 ],

            [ 1, 13, 5, 16 ],

            [ 6, 7, 18, 15 ] ];

// var mat = {{  1,   2,   3,   4},

//             { 5,   6,   7,   8},

//             { 9, 10, 11, 12},

//             {13, 14, 15, 16},

//             {17, 18, 19, 20}}

// Output: 1 5 9 13 17 18 14 10 6 2 3 7 11 15 19 20 16 12 8 4 

for(let i = 0 ; i < mat[0].length() ; i++) {

    // if i is even

    if(i % 2 == 0) {

        // move down

        for(let j = 0 ; j < mat.length(); j++) {

            console.log(mat[j][i]) ;

        }

    }

    else {

        // move up

        for(let j = mat.size() - 1 ; j > 0 ; j++) {

            console.log(mat[j][i]) ;

        }

    }

}