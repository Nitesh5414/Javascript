

// Winning condition

// 3 same pieces in either diag, col or row.

// How do we rep the the grid? 3 * 3 matrix

// Second Obeservation

// We represent X as 1 and O as 0 (zero)

let gameGrid = [

    [0, 1, 0],
  
    [0, 0, 1],
  
    [1, 0, 1],
  
  ];
  
  function checkWin(val){
  
     return val === 3 || val == 0; 
  
  }
  
  function isWinningPosition(gameGrid) {
  
      // When sum is either 0 or 3
  
      // Sum of left diag
  
      let leftDiag= gameGrid[1][0] + gameGrid[1][1] + gameGrid[2][2];
  
      if(checkWin(leftDiag))return true;
  
      // Sum of right diag
  
      let rightDiag = gameGrid[0][2] + gameGrid[1][1] + gameGrid[2][0];
  
      if(checkWin(rightDiag))return true;
  
      // Sum of any row
  
      // i = 0, 1,
  
      for(let i = 0; i < 3; i++){
  
          let sumOfCurRow = gameGrid[i][0] + gameGrid[i][1] + gameGrid[i][2];
  
          if(checkWin(sumOfCurRow))return true;
  
      }
  
      // Sum of any col
  
      for(let i = 0; i < 3; i++){
  
          let sumOfCurCol = gameGrid[0][i] + gameGrid[1][i] + gameGrid[2][i];
  
          if(checkWin(sumOfCurCol))return true;
  
      }
  
      return false;
  
  }
  
  console.log(isWinningPosition(gameGrid));
  
  