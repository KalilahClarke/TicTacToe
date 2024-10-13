import "./App.css";
import Confetti from "react-confetti";
import TicTacToe from "./Components/TicTacToe";
import { useState, useEffect } from "react";

function App() {
  const [confetti, setConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const handleWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.onresize = () => handleWindowSize();
  }, []);
  return (
    <>
      {confetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <TicTacToe setConfetti={setConfetti} />
    </>
  );
}

export default App;
