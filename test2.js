let n = 10;

function letsFizzBuzz(n){
    // use console.log("hello") to print the output, you may use string to concat output in one line
    let output = "";
	for(i=0; i<n; i++){
        if(i%3==0 && i%5!=0){
            console.log("Buzz")
            
        }
        else if(i%5==0){
            console.log("FizzBuzz")
        }
        else {
            console.log(i)
        }
    
        console.log(output)
    
}
}
letsFizzBuzz(n);