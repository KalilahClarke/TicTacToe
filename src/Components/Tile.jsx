import React from "react";

export default function Tile({
  index,
  value,
  tiles,
  setTiles,
  player,
  setPlayer,
}) {
  const handleTileClick = () => {
    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = player;
    setTiles(newTiles);
    setPlayer(player === "X" ? "O" : "X");
  };
  return (
    <div className="tile" onClick={handleTileClick}>
      {value}
    </div>
  );
}
