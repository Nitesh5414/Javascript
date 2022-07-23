// Generate Parentheses Problem statement You are given a ‘n’ pair of parentheses, 

// write a function to generate all combinations of well formed parentheses 

// For n = 1, [ “()” ] For n = 2, then we have to return the combinations of all parentheses 

// [ “(())”,  “()()” ] For n = 3 [ “((()))”,  “(()())”,  “(())()”,  “()(())”,  “()()()” ]

// n parantheses -> ( opening

// n parantheses -> ) closing

let n = 3;


function generateValidParantheses(str, ctO){

  if(str.length == 2 * n){

    console.log(str);

    return;

  }

  if(ctO < n){

    str += '(';

    generateValidParantheses(str, ctO + 1);

    // pop last element

    str = str.substring(0, str.length - 1);

  }


  let ctc = str.length - ctO;


  if(ctO > ctc){

    

    str += ')';


    generateValidParantheses(str, ctO);

    str = str.substring(0, str.length - 1);


  }

}

generateValidParantheses("", 0);

