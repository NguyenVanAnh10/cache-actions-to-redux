import React from "react";

import {
  TodoListNotSaveStateInRedux,
  TodoListSaveStateInRedux,
} from "./components/TodoList";
import DetailTodo from "./components/DetailTodo";
import FetchDataButton from "./components/FetchDataButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <FetchDataButton />
      <TodoListSaveStateInRedux title="Todo List Save In Redux" />
      <TodoListNotSaveStateInRedux title="Todo List Do Not Save In Redux" />
      <DetailTodo />
    </div>
  );
}

export default App;
