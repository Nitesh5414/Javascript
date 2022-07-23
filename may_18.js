let n = 4;
out = "";
for (let row = 0; row <= n; row++) {
    for (let col = 0; col <= row; col++) {
        out += " "
    }
    for (col = row; col <= n; col++) {
        out += "* ";
    }
    out += "\n";
}
for (row = 1; row <= n; row++) {
    for (col = row; col <= n; col++) {
        out += " "
    }
    for (col = 0; col <= row; col++) {
        out += "* ";
    }
    out += "\n";
}
console.log(out)
​
//other way
​
// let n = 3;
// let out = "";
// ​
// for (let row = 0; row <= n; row++) {
// ​
//     for (let col = 0; col <= row; col++) {
// ​
//         out += "  ";
//     }
//     for (col = row; col <= n; col++) {
//         out += "* "
//     }
//     for (col = row; col < n; col++) {
//         out += "* "
//     }
//     out += "\n";
// }
// for (row = 1; row <= n; row++) {
//     for (col = row; col <= n; col++) {
//         out = out + "  "
//     }
//     for (col = 0; col <= row; col++) {
//         out = out + "* "
//     }
//     for (col = 1; col <= row; col++) {
//         out = out + "* "
//     }
//     out += "\n";
// }
// console.log(out)