import React, { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const wordList = require("./WordList.json");
  const [word, setWord] = useState<String>("");
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
