function birthdayCakeCandles(candles) {

    let maxElement = Math.max(...candles);
  
    let something = candles.filter((x) => x === maxElement).length;
  
    return something;
  
  }
  
  ​
  
  console.log(birthdayCakeCandles([4, 2, 1, 4]));