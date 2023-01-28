type Token = null | boolean | unknown
let rows = 6
let columns = 7

export const board = (
  chosenRow: number[] = [],
  chosenCell: number[] = [],
  player: number = 1
): Token[][] => {
  let board = []
  // make diagonals
  if (
    chosenRow.length > 1 &&
    chosenCell.length > 1 &&
    chosenCell.every(el=>chosenRow.includes(el))
  ) {
    console.log('make diagonal');
    
    for (let c = 0; c < columns; c++) {
      let tempRow = []
      for (let r = 0; r < rows; r++) {
        if (chosenRow.includes(r)) { 
          if (chosenCell.includes(c) && chosenCell[c]===r) tempRow.push(player)
          else tempRow.push(null)
        }else{
        tempRow.push(null)}
      }
      board.push(tempRow)
    }
    return board
  }
  
  for (let c = 0; c < columns; c++) {
    let tempRow = []
    for (let r = 0; r < rows; r++) {
      if (chosenRow && chosenRow.includes(r)) {
        if (chosenCell && chosenCell.includes(c)) tempRow.push(player)
        else tempRow.push(null)
      } else {
        tempRow.push(null)
      }
    }
    board.push(tempRow)
  }
  return board
}

// export const checkWinner = (currentBoard) => {
export const checkWinner = (currentBoard: Token[][]) => {
  //verticals
  console.log(currentBoard)

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c][r + 1] &&
        currentBoard[c][r] === currentBoard[c][r + 2] &&
        currentBoard[c][r] === currentBoard[c][r + 3]
      ) {
        console.log('verticals')
        return true
      }
    }
  }
  // horizontals
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c + 1][r] &&
        currentBoard[c][r] === currentBoard[c + 2][r] &&
        currentBoard[c][r] === currentBoard[c + 3][r]
      ) {
        console.log('horizontals')
        return true
      }
    }
  }
  // Diagonals down
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c - 1][r - 1] &&
        currentBoard[c][r] === currentBoard[c - 2][r - 2] &&
        currentBoard[c][r] === currentBoard[c - 3][r - 3]
      ) {
        console.log('diag down')
        return true
      }
    }
  }
  // Diagonals up
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      console.log('diag up')
      if (
        currentBoard[c][r] !== null &&
        currentBoard[c][r] === currentBoard[c + 1][r - 1] &&
        currentBoard[c][r] === currentBoard[c + 2][r - 2] &&
        currentBoard[c][r] === currentBoard[c + 3][r - 3]
      ) {
        return true
      }
    }
  }
  return null
}
