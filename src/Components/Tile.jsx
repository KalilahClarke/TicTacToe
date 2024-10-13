import React, { useState, useEffect } from "react";

export default function Tile({
  index,
  value,
  tiles,
  setTiles,
  player,
  setPlayer,
  gameOver,
  isWinningTile,
  strike,
}) {
  const [hover, setHover] = useState("");
  useEffect(() => {
    setHover(player === "X" ? "x-hover" : "o-hover");
  }, [player]);

  // useEffect(() => {
  //   // for (let i = 0; i < strike.length; i++) {
  //   //   if (strike[i] === index) {
  //   //    const tileWinner = document.getElementById(`${index}`);
  //   //    tileWinner.style.backgroundColor = 'darkorange';
  //   //    tileWinner.style.fontSize = '110px';
  //   //   }
  //   // }
  //   // tilePopulation()
  // }, [gameOver === true]);

  const handleTileClick = () => {
    if (tiles[index] !== null || gameOver) return;

    const newTiles = [...tiles];
    newTiles[index] = player;
    setTiles(newTiles);
    setPlayer(player === "X" ? "O" : "X");
  };

  const tilePopulation = () => {
    return (
      <div
        id={`${isWinningTile ? "winner": `${index}`}`}
        className={`tile ${!gameOver && "hoverTile"} ${
          value ? "" : gameOver ? "" : hover
        }`}
        onClick={handleTileClick}
      >
        {value}
      </div>
    );
  };

  return (
    // <div
    //   id={`${index} ${isWinningTile ? "winner" : ""}`}
    //   className={`tile ${!gameOver && "hoverTile"} ${
    //     value ? "" : gameOver ? "" : hover
    //   }`}
    //   onClick={handleTileClick}
    // >
    //   {value}
    // </div>
    tilePopulation()
  );
}
