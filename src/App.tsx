import { useState } from 'react';
import reactLogo from './assets/react.svg';
import WinnerModal from './components/WinnerModal';
import {emptyBoard, checkWinner} from './logic/board'
import './App.css';
export type Players = 1|2
const players = {
  one:1,
  two:2
}
export type Token = null | Players | unknown;
function App() {
  const [board, setBoard] = useState < Token[][] >(emptyBoard());
  const [turn, setTurn] = useState(players.one);
  const [winner, setWinner] = useState<Token>(null);

  
  const clickCellToken = (c: number,r:number) => {
    if (board[c][r] !== null || winner) return;
    const newBoard = [...board];
    // token goes down 
    if (newBoard[c][r+5] === null)   r +=5;
    else if (newBoard[c][r+4] === null)   r +=4;
    else if (newBoard[c][r+3] === null)   r +=3;
    else if (newBoard[c][r+2] === null)   r +=2;
    if (newBoard[c][r+1] === null)   r +=1; 
    newBoard[c][r] = turn;
    
    console.log({r},{c});
    setBoard(newBoard);
    const changeTurn = turn === players.one ? players.two:players.one
    setTurn(changeTurn);
    const newWinner = checkWinner(newBoard)
    console.log(newWinner);
    
    if (newWinner) setWinner(newWinner)
  };

  const resetBoard = () => {
    setBoard(emptyBoard());
    setTurn(players.one)
    setWinner(null)
  };
  // TODO if down cell is empty fill down cell except the last in the column making tokens

  // TODO win condition
  return (
    <main className='App'>
      <button onClick={resetBoard}>Reset</button>
      <div className='board'>
{/* {console.log(board)} */}
      {board.map((row, r) => (
        <div key={r} >
          <p>{ r}</p>
            {row.map((col, c) => (
              <p
                key={c}
                className={`cell ${
                  col === players.one? 'token1': col === players.two? 'token2': ''}`}
                  onClick={() => clickCellToken(r,c)}
              >
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
      <WinnerModal reset={resetBoard } winner={winner}/>
    </main>
  );
}

/* 
[
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
]
*/

export default App;
