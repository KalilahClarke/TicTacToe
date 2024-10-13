import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import Modal from "./Modal";

const PLAYER_X = "X";
// const PLAYER_O = "O";

const WINNING_COMBINATIONS = {
  "strike-column-1": [0, 3, 6],
  "strike-column-2": [1, 4, 7],
  "strike-column-3": [2, 5, 8],
  "strike-row-1": [0, 1, 2],
  "strike-row-2": [3, 4, 5],
  "strike-row-3": [6, 7, 8],
  "strike-diagonal-1": [0, 4, 8],
  "strike-diagonal-2": [2, 4, 6],
};

export default function Board() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState([]);
  const [player, setPlayer] = useState(PLAYER_X);
  const [gameOver, setGameOver] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  let arrayCombinations = [];
  
  const checkWin = () => {
    for (const combination in WINNING_COMBINATIONS) {
      const [a, b, c] = WINNING_COMBINATIONS[combination];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrike(WINNING_COMBINATIONS[combination]);
        setModalMessage(`Player ${tiles[a]} wins!`);
        setGameOver(true);
        return;
      }
    }

    // Check for a draw
    if (tiles.every((tile) => tile !== null)) {
      setModalMessage("It's a draw!");
      setGameOver(true);
    }
  };

  useEffect(() => {
    checkWin();
  }, [tiles]);

  // Add this console.log to debug
  console.log("Modal Message:", modalMessage);

  const resetGame = () => {
    setTiles(Array(9).fill(null));
    setStrike([]);
    setPlayer(PLAYER_X);
    setGameOver(false);
    setModalMessage("");
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => {
        return (
          <Tile
            index={index}
            value={tiles[index]}
            tiles={tiles}
            setTiles={setTiles}
            player={player}
            setPlayer={setPlayer}
            gameOver={gameOver}
            arrayCombinations={arrayCombinations}
            strike={strike}
          />
        );
      })}
      
      <Modal
        isOpen={gameOver}
        message={modalMessage}
        onClose={resetGame}
      />
    </div>
  );
}
