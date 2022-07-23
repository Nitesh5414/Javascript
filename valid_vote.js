// let input = readline().split(" ");
let age = 18
let gender = 'F'

function checkEligibility(age, gender){
   //write your logic here, return true if eligible else return false
   if(age >= 21 && gender=='M' || age >= 18 && gender=='F'){
       console.log("Eligible")
   }
   else{
       console.log("Not Eligible")
   }
}
// console.log(checkEligibility(age, gender) ? "Eligible" : "Not Eligible");
checkEligibility(age, gender)