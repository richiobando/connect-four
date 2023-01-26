type Token = null | boolean | unknown;
let rows = 6;
let columns = 7;

export const emptyBoard = () => {
  let board = [];
  for (let c = 0; c < columns; c++) {
    let row = [];
    for (let r = 0; r < rows; r++) {
      row.push(null);
    }
    board.push(row);
  }
  return board;
};

// export const checkWinner = (currentBoard) => {
export const checkWinner = (currentBoard: Token[][]) => {
  //verticals
  console.log(currentBoard);
  
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c][r + 1] &&
        currentBoard[c][r] === currentBoard[c][r + 2] &&
        currentBoard[c][r] === currentBoard[c][r + 3]
        ) {
          console.log('verticals');
        return true;
      }
    }
  }
      // horizontals
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          if (
            currentBoard[c][r] !== null &&
            currentBoard[c][r] === currentBoard[c+1][r] &&
            currentBoard[c][r] === currentBoard[c+2][r] &&
            currentBoard[c][r] === currentBoard[c+3][r]
            ) {
              console.log('horizontals');
        return true;
          }
        }
      }
      // Diagonals down
  for (let c = 3; c < columns; c++) {
    for (let r = 3; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c-1][r-1] &&
        currentBoard[c][r] === currentBoard[c-2][r-2] &&
        currentBoard[c][r] === currentBoard[c-3][r-3]
        ) {
        console.log('diag down');
        return true;
      }
    }
  }
      // Diagonals up
      for (let c = 0; c < columns; c++) {
        for (let r = 3; r < rows - 3; r++) {
          console.log('diag up');
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c+1][r-1] &&
        currentBoard[c][r] === currentBoard[c+2][r-2] &&
        currentBoard[c][r] === currentBoard[c+3][r-3]
      ) {
        return true;
      }
    }
  }
  return null;
};
emptyBoard();
