

function pow(b, e) {

  if (e == 0) {

    return 1;

  }

  if (e % 2 != 0) return b * pow(b, e - 1);

  // this is always even

  return pow(b * b, e / 2);

}

console.log(pow(4, 4));

