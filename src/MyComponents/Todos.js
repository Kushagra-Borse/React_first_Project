import React from "react";
import { TodoItem } from "./TodoItem";
import { useState } from "react";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">ToDos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} edit={props.edit} />
            );
          })}
    </div>
  );
};

export const AddTodo = (props) => {
  const [title, settitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be empty");
    } else {
      console.log(title);
      props.addTodo(title);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
          />
          <button type="submit" className="btn btn-sm btn-success">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
