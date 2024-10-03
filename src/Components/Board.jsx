import React, { useState } from "react";
import Tile from "./Tile";
import Strike from "./Strike";

const PLAYER_X = 'X';
const PLAYER_O = 'O';

export default function Board() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(PLAYER_X);

  return (
    <div className="board">
      {tiles.map((tile, index) => {
        return<Tile index={index} value={tiles[index]} tiles={tiles} setTiles={setTiles} player={player} setPlayer={setPlayer}/>;
      })}
      <Strike />
    </div>
  );
}
