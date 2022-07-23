// 1 2 3 4 5 6 7
//  2 3 4 5 6 7
//   3 4 5 6 7
//    4 5 6 7
//     5 6 7
//      6 7
//       7
//      6 7
//     5 6 7
//    4 5 6 7
//   3 4 5 6 7
//  2 3 4 5 6 7
// 1 2 3 4 5 6 7 

var rows = 7; // Number N



//Print the pyramid
// for (i = 1; i <= rows; i++) {
//   for (j = 1; j < i; j++) {
//     console.log("&nbsp;");
//   }
//   for (j = i; j <= rows; j++) {
//     console.log(j + " ");
//   }
//   console.log("<br>");
// }



// for (i = rows - 1; i >= 1; i--) {
//   for (j = 1; j < i; j++) {
//     console.log("&nbsp;");
//   }
//   for (j = i; j <= rows; j++) {
//     console.log(j + " ");
//   }
//   console.log("<br>");
// }

let n = 5;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 1; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = i; k <= n; k++) {
    string += k;
  }
  string += "\n";
}
// pyramid pattern
for (let i = n-1; i >= 1; i--) {
  // printing spaces
  for (let j = 1; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = i; k <= n; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);