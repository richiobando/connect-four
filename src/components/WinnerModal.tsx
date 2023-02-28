import React from 'react';
import { Token } from '../App';
import PlayerTurn from './PlayerTurn';
type Props = {
  reset: () => void;
  token: Token;
};

export default function tokenModal({ token, reset }: Props) {
  console.log({token});
  
  if (token === null) return null;
  const text = token === false ? 'Draw' : 'You Win';
  return (
    <section className='winnerModal'>
      <div className='winner-container'>
        {/* <h2>{text}</h2> */}
        <h2>Win</h2>
        <PlayerTurn token={token} />
        <footer>
          <button onClick={reset}>Reset the Game</button>
        </footer>
      </div>
    </section>
  );
}
