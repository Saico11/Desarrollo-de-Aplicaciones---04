// src/components/TodoItem.js
import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
