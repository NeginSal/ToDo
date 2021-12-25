import React, { useState } from "react";
import Todos from "./Todos.js";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play chess" },
  ]);
  return (
    <div className="App container">
    <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos}/>
    </div>
  );
};

export default App;
