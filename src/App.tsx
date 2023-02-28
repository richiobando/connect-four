import { useState } from 'react';
import reactLogo from './assets/react.svg';
import WinnerModal from './components/WinnerModal';
import {emptyBoard,makeLine, hasWinner} from './logic/board'
import './App.css';
import PlayerTurn from './components/PlayerTurn';

import { players, PlayersTypes } from './constants';

export type Token = null | PlayersTypes | unknown;
function App() {
  const [board, setBoard] = useState<Token[][]>(emptyBoard());
  const [turn, setTurn] = useState(players.one);
  const [winner, setWinner] = useState<Token>(null);

  
  const clickCellToken = (c: number, r: number) => {
    if (board[c][r] !== null || winner) return;
    const newBoard = [...board];
    // token goes down 
    if (newBoard[c][r+5] === null)   r +=5;
    else if (newBoard[c][r+4] === null)   r +=4;
    else if (newBoard[c][r+3] === null)   r +=3;
    else if (newBoard[c][r+2] === null)   r +=2;
    if (newBoard[c][r+1] === null)   r +=1; 
    newBoard[c][r] = turn;

    setBoard(newBoard);
    const changeTurn = turn === players.one ? players.two:players.one
    setTurn(changeTurn);
    const newWinner: Token = hasWinner(newBoard)
    if (newWinner) setWinner(newWinner)
  };

  const resetBoard = () => {
    const empty=emptyBoard()
    setWinner(null)
    setBoard( makeLine(empty,[1], [0, 1, 2, 3]));
    setTurn(players.one)
  };

  return (
    <main className='App'>
      <PlayerTurn token={turn}/>
      <div className='board'>
      {board.map((row, r) => (
        <div key={r} >
            {row.map((col, c) => (
              <p
              key={c}
              className={`cell ${col === players.one? 'token1': col === players.two? 'token2': ''}`}
                onClick={() => clickCellToken(r,c)}
                >
              </p>
            ))}
          </div>
        ))}
      </div>
        <button onClick={resetBoard}>Reset</button>
      <WinnerModal reset={resetBoard } token={winner}/>
    </main>
  );
}

export default App;
