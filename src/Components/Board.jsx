import React, { useState } from "react";
import Tile from "./Tile";
import Strike from "./Strike";

const PLAYER_X = "X";
const PLAYER_O = "O";

const WINNING_COMBINATIONS = {
  "strike-row-1": [0, 3, 6],
  "strike-row-2": [1, 4, 7],
  "strike-row-3": [2, 5, 8],
  "strike-column-1": [0, 1, 2],
  "strike-column-2": [3, 4, 5],
  "strike-column-3": [6, 7, 8],
  "strike-diagonal-1": [0, 4, 8],
  "strike-diagonal-2": [2, 4, 6],
};

export default function Board() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [strike, setStrike] = useState('');
  const [player, setPlayer] = useState(PLAYER_X);

  const checkWin = () => {
    for (const combination in WINNING_COMBINATIONS) {
      console.log(tiles[0], tiles[1], tiles[2]);
      const [a, b, c] = WINNING_COMBINATIONS[combination];
      if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
        setStrike(combination);
        return;
      }
    }
  }
  
  

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
          />
        );
      })}
      <Strike strike={strike} setStrike={setStrike}/>
    </div>
  );
}
