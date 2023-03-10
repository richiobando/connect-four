import React from "react";
import { PlayersTypes, players } from '../constants';
import { Token } from '../App';
type Props = {
  token: Token | PlayersTypes
};

export default function PlayerTurn({ token }: Props) {
  return <div>{token === 1
    ? (<div className='header'>
      <h2>Player 1</h2>
      <div className={`cell token1`}></div>
    </div>)
    : token === 2?(<div className='header'>
      <h2>Player 2</h2>
      <div className={`cell token2`}></div>
    </div>):null}</div>;
}
