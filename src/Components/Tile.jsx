import React, { useState, useEffect } from "react";

export default function Tile({
  index,
  value,
  tiles,
  setTiles,
  player,
  setPlayer
}){
  const [hover, setHover] = useState('');

  useEffect(() => {
    setHover(player === 'X' ? 'x-hover' : 'o-hover');
  }, [player]);

  const handleTileClick = () => {

    if (tiles[index] !== null) return;

    const newTiles = [...tiles];
    newTiles[index] = player;
    setTiles(newTiles);
    setPlayer(player === "X" ? "O" : "X");

  };

  return (
    <div 
      id={`${index}`}
      className={`tile ${value ? '' : hover}`} 
      onClick={handleTileClick}
    >
      { value }
    </div>
  );
}
