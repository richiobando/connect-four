import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';


type Token = null|boolean
function App() {
  const [board, setBoard] = useState(Array.from({ length: 42 }).fill(null));
  // const [board, setBoard] = useState(initialState);
  // turn true is for token 1 and false for token 2
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<null | boolean>(null);

  const checkWinner = (currentBoard:Token[]) => {
    for (const iterator of object) {
      
    }
  };
  const clickCellToken = (i: number) => {
    if (board[i] !== null) return;
    const newBoard = [...board];
    console.log(i);
    let cell;
    if (newBoard[i + 5 * 7] === null) cell = i + 5 * 7;
    else if (newBoard[i + 4 * 7] === null) cell = i + 4 * 7;
    else if (newBoard[i + 3 * 7] === null) cell = i + 3 * 7;
    else if (newBoard[i + 2 * 7] === null) cell = i + 2 * 7;
    else if (newBoard[i + 7] === null) cell = i + 7;
    else cell = i;

    console.log({ cell });
    newBoard[cell] = turn;
    setBoard(newBoard);
    setTurn((prev) => !prev);
  };
  const resetBoard = () => {
    setBoard(Array.from({ length: 42 }).fill(null));
  };
  // TODO if down cell is empty fill down cell except the last in the column making tokens

  // TODO win condition
  return (
    <div className='App'>
      <button onClick={resetBoard}>Reset</button>
      <div className='board'>
        {board.map((x, i) => (
          <div
            key={i}
            className={`cell ${
              board[i] === true ? 'token1' : board[i] === false ? 'token2' : ''
            }`}
            onClick={() => clickCellToken(i)}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
