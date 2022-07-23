const ps = require("prompt-sync");
const prompt = ps();

function isFull(val) {
    return val === 0 || val === 3;
    }
    function isWinningPosition(gameGrid) {
    for (let i = 0; i < 3; i++) {
    let rowSum = 0;
    let colSum = 0;
    for (let j = 0; j < 3; j++) {
    rowSum += gameGrid[i][j];
    colSum += gameGrid[j][i];
    }
    if (isFull(rowSum) || isFull(colSum)) return true;
    }
    let leftDiag = 0;
    let rightDiag = 0;
    for (let i = 0, j = 2; i < 3; i++, j--) {
    leftDiag += gameGrid[i][i];
    rightDiag += gameGrid[i][j];
    }
    if (isFull(leftDiag) || isFull(rightDiag)) return true;
    return false;
    }
    function convertBoxNumberToCoord(boxNumber) {
    return [parseInt(boxNumber / 3), boxNumber % 3];
    }
    function generateRandomCoords(gameGrid) {
    while (true) {
    let xCoord = Math.floor(Math.random() * 3);
    let yCoord = Math.floor(Math.random() * 3);
    if (gameGrid[xCoord][yCoord] === 100) return [xCoord, yCoord];
    }
    }
    function getCoordForTurn(gameGrid, playerNumber, isAgainstComputer) {
    if (playerNumber === 2 && isAgainstComputer) {
    return generateRandomCoords(gameGrid);


    }
    while(true){
    let boxNumber = prompt(`Player ${playerNumber} turn\nPlease enter boxNumber \nGrid Box Number\n0 | 1 | 2
    \n3 | 4 | 5 \n6 | 7 | 8`);
    if(boxNumber >= 0 && boxNumber < 9){
    let [xCoord, yCoord] = convertBoxNumberToCoord(boxNumber);
    if (gameGrid[xCoord][yCoord] === 100) return [xCoord, yCoord];
    console.log('Box number entered is already filled');
    }
    else console.log('Please enter valid boxNumber');
    }
    }
    function printGrid(gameGrid) {
    console.log('Printing Matrix State');
    console.log(new Array(20).join('-'));
    for (let i = 0; i < 3; i++) {
    let curRow = "";
    for (let j = 0; j < 3; j++) {
    if(gameGrid[i][j] === 100)curRow += ' ';
    if(gameGrid[i][j] === 1)curRow += 'X';
    if(gameGrid[i][j] === 0)curRow += 'O';
    if(j + 1 < 3)curRow += ' | ';
    }
    console.log(curRow);
    }
    console.log(new Array(20).join('-'));
    }
    function playGame(gameGrid, isAgainstComputer = false) {
    for (let turn = 0; turn < 9; turn++) {
    const playerNumber = (turn % 2) + 1;
    const [xCoord, yCoord] = getCoordForTurn(
    gameGrid,
    playerNumber,
    isAgainstComputer
    );
    gameGrid[xCoord][yCoord] = playerNumber === 1 ? 0 : 1;
    printGrid(gameGrid);
    if (isWinningPosition(gameGrid)) {
    console.log(`Player ${playerNumber} won the game`);
    
    return;
    }
    }
    return "The game is a draw";
    }
    let gameGrid = [
    [100, 100, 100],
    [100, 100, 100],
    [100, 100, 100],
    ];
    while(true){
    let playWithComputer = prompt('Do you want to play with computer (Y/N)');
    if(playWithComputer === 'Y' || playWithComputer === 'N'){
    playGame(gameGrid, playWithComputer === 'Y');
    break;
    }
    console.log('Please Enter Valid Value');
    }