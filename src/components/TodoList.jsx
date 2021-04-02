import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { subscribeAction, fetchTodo } from "../actions";
import api from "../api";

export const TodoListNotSaveStateInRedux = ({ title }) => {
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      subscribeAction({
        event: "GET_TODOS",
        subscriber: TodoListNotSaveStateInRedux.name,
        action: () => {
          api.getTodos().then((d) => setTodos(d));
        },
      })
    );
  }, []);

  return <TodoList title={title} todos={todos} />;
};
export const TodoListSaveStateInRedux = ({ title }) => {
  const {
    todosState: { todos, loading },
  } = useSelector(({ state }) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    api.getTodos().then((data) => {
      dispatch(fetchTodo({ data, loading: false }));
    });
  }, []);

  console.log("Todo List Save State In Redux");

  if (loading) return <p>loading...</p>;
  return <TodoList title={title} todos={todos} />;
};

const TodoList = ({ todos = [], title }) => {
  if (!todos.length) return null;
  return (
    <>
      <h3>{title}</h3>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{ padding: "5px 0" }}
          >{`${todo.id} - ${todo.text}`}</div>
        ))}
      </div>
    </>
  );
};
export default TodoListNotSaveStateInRedux;
