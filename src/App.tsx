import React, { useState, useEffect } from "react";
import "./App.scss";

function generateRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const wordList = require("./WordList.json");
  const [word, setWord] = useState<String>("");
  const wordChosen: number = generateRandomInt(1, 2855);
  const componentArray: any = [];
  for (let i = 0; i <= wordList.words[wordChosen].length; i++) {
    componentArray.push(<p className="inline p-3">_</p>);
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {componentArray}
      </div>
    </>
  );
}

export default App;
