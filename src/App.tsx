import React, { useState, useEffect } from "react";
import "./App.scss";

function generateRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const wordList: string = require("./WordList.json");
  const [word, setWord] = useState<String>("");
  const wordChosen: number = generateRandomInt(0, 2886);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
