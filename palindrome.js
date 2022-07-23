// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(palindrome('nitesh'))

function isPalStr(str, s, length) {
    if (s == length)
      return true;
    if ((str.charAt(s)) != (str.charAt(length)))
      return false;
    if (s < length + 1)
      return isPalStr(str, s + 1, length - 1);
    return true;
  }
  var str = "geegogeeg"
  var length = str.length
  if (isPalStr(str, 0, length - 1))
    console.log("YES");
  else
    console.log("NO");
  