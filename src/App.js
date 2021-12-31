import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import Todos from "./Todos.js";
import AddTodo from "./AddTodo.js";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play chess" },
  ]);
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addTodo = (content) => {
    setTodos([...todos, { content, id: uuid() }]);
  };
  return (
    <div className="App container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
};

export default App;
