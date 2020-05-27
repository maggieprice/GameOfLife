import React from "react";
import "./App.css";
import Game from "./Game.js";
import Rules from "./Rules.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Maggie's approach to Conway's Game of Life using react and
        javascript!
      </header>
      <Rules />
      <Game />
    </div>
  );
}
export default App;
