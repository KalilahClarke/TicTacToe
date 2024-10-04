import React, { useState, useEffect } from "react";
import Tile from "./Tile";

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

  let arrayCombinations = [];
  
  const checkWin = () => {

    for (const combination in WINNING_COMBINATIONS) {
      const [a, b, c] = WINNING_COMBINATIONS[combination];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrike(WINNING_COMBINATIONS[combination]);
        setGameOver(true);
        return;
      }
    }
  }

  useEffect(() => {
    checkWin();
  }, [tiles]);
  

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
      {/* <Strike strike={strike} setStrike={setStrike}/> */}
    </div>
  );
}
