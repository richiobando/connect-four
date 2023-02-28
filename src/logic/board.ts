type Token = null | boolean | unknown
let rows = 6
let columns = 7

export const emptyBoard = (): null[][] => {
  let board = []
  for (let c = 0; c < columns; c++) {
    let tempRow = []
    for (let r = 0; r < rows; r++) tempRow.push(null)
    board.push(tempRow)
  }
  return board
}

export const makeLine = (
  board:(number|null)[][],
  chosenRows: number[] = [],
  chosenCells: number[] = [],
  player: number = 1
) => {
  
  for (let c = 0; c < chosenCells.length; c++) {
    for (let r = 0; r < chosenRows.length; r++) {
      if (chosenRows && chosenRows.includes(r)) {
        if (chosenCells && chosenCells.includes(c)) board[c][r] = chosenCells[0]
        else board[c][r] = chosenCells[0]
      } else 
      board[c][r] = chosenCells[0]
    } 
  }
  return board
}

// export const checkWinner = (currentBoard) => {
export const hasWinner = (currentBoard: Token[][]) => {
  //verticals
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c][r + 1] &&
        currentBoard[c][r] === currentBoard[c][r + 2] &&
        currentBoard[c][r] === currentBoard[c][r + 3]
      ) {
        console.log('verticals')
        return currentBoard[c][r]
      }
    }
  }
  // horizontals
  for (let c = 0; c < columns-3; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c + 1][r] &&
        currentBoard[c][r] === currentBoard[c + 2][r] &&
        currentBoard[c][r] === currentBoard[c + 3][r]
      ) {
        console.log('horizontals')
        return currentBoard[c][r] 
      }
    }
  }
  // Diagonals down
  for (let c = 3; c < columns; c++) {
    for (let r = 3; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c - 1][r - 1] &&
        currentBoard[c][r] === currentBoard[c - 2][r - 2] &&
        currentBoard[c][r] === currentBoard[c - 3][r - 3]
      ) {
        console.log('diag down')
        return currentBoard[c][r] 
      }
    }
  }
  // Diagonals up
  for (let c = 0; c < columns - 3; c++) {
    for (let r = 3; r < rows ; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c + 1][r - 1] &&
        currentBoard[c][r] === currentBoard[c + 2][r - 2] &&
        currentBoard[c][r] === currentBoard[c + 3][r - 3]
        ) {
        console.log('diag up')
        return currentBoard[c][r] 
      }
    }
  }
  return null
}
