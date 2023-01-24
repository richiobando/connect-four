// type Token =  boolean | unknown;
const empty = Array.from({ length: 42 }).fill(null);
// const board = empty.map((e,i)=>[14,21,28,35].includes(i) ? true : null )
const board = empty.map((e, i) => ([20,26,32,38].includes(i) ? true : null));
export const checkWinner = (currentBoard) => {
  for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 4; i++) {
      let col = j * 7; // column
      let ln = i * 7; // line
      let dg = j * 8;
      //horizontals
      // i=0 j=6
      // i=0 col= 42
      if (
        col < 42 &&
        currentBoard[i + col] !== null && //
        currentBoard[i + col] === currentBoard[i + col] &&
        currentBoard[i + col] === currentBoard[i + col + 2] &&
        currentBoard[i + col] === currentBoard[i + col + 3]
      ) {
        return currentBoard[i + col];
      }
      // verticals | if a nomber and his multipliers 7  are equal we have a winner (7n)
      /*
      change the order of the for loops
      i=0,1,2,3,
      j=0,1,2,3,4,5,6 
      [0][7][14][28] = [j] [j+7] [2*j + 7] [3*j + 7] 
      [7][14][21][28] = [j+1*7] [j+ln+7] [2*(j+ln)+7] [3*(j+ln)+7] = 7 14
      [14][21][28][35] = [j+2*7][j+7]
      */
      if (
        currentBoard[j + ln] !== null &&
        currentBoard[j + ln] === currentBoard[j + ln + 7] &&
        currentBoard[j + ln] === currentBoard[j + ln + 2 * 7] &&
        currentBoard[j + ln] === currentBoard[j + ln + 3 * 7]
      ) {
        return currentBoard[j + ln];
      }
      // Diagonals down
      if (
        i + dg <= 17 &&
        currentBoard[i + dg] !== null &&
        currentBoard[i + dg] === currentBoard[i + dg + 8] &&
        currentBoard[i + dg] === currentBoard[i + dg + 2 * 8] &&
        currentBoard[i + dg] === currentBoard[i + dg + 3 * 8]
      ) {
        return currentBoard[i + dg];
      }
      // Diagonals up
      if (
        j < 4 &&
        currentBoard[3 + col+ i] !== null &&
        currentBoard[3 + col + i] === currentBoard[3 + col + i + 6] &&
        currentBoard[3 + col + i] === currentBoard[3 + col + i + 2 * 6] &&
        currentBoard[3 + col + i] === currentBoard[3 + col + i + 3 * 6]
      ) {
        return currentBoard[3 + col+ i];
      }
    }
  }
  return 'no winner';
};
checkWinner(board);
