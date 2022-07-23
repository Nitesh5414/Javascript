var row = 5
for (i = 1; i <= row; i++) {
  for (j = 1; j < i; j++) {
    console.log("&nbsp;");
  } {
    for (j = 1; j <= (row * 2 - (2 * i - 1)); j++) {
      if (i == 1 || j == 1 || j == (row * 2 - (2 * i - 1))) {
        console.log("*");
      } else {
        console.log("&nbsp;");
      }
    }
  }
  console.log("<br/>")
}