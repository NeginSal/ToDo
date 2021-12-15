import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play chess" },
  ]);
  return <div className="App"></div>;
}

export default App;
