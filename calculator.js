const ps = require("prompt-sync");
const prompt = ps();
var num1 = parseInt(prompt("Enter first number: "));
var num2 = parseInt(prompt("Enter second number: "));
const operator = prompt("Please selsect the operator: ")
var result = 0

function calculator(num1, num2, operator){
    if(operator=='+'){
        result = num1 + num2;
        console.log(result)
    }
    else if(operator=='-'){
        result = num1-num2;
        console.log(result)
    }
    else if(operator=='/'){
        result = num1/num2;
        console.log(result)
    }
    else if(operator=='*'){
        result = num1*num2
        console.log(result)
    }
    else{
        console.log("you select wrong input")
    }
}

calculator(num1, num2, operator)
