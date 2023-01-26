import React from 'react';
import { Token } from '../App';
type Props = {
  reset: () => void;
  winner: Token;
};

export default function WinnerModal({ winner, reset }: Props) {
  if (winner === null) return null;
  const text = winner === false ? 'Draw' : 'You Win';
  return (
    <section>
      <h2>{text}</h2>
      {/* <header>{winner && <p>{winner}</p>}</header> */}
      <footer>
        <button onClick={reset}>Reset the Game</button>
      </footer>
    </section>
  );
}
