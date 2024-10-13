import React from "react";
import Board from "./Board";

export default function TicTacToe({ setConfetti }) {
  return (
    <div className="game">
      <h1 className="title">Tic Tac Toe</h1>
      <Board setConfetti={setConfetti} />
    </div>
  );
}
