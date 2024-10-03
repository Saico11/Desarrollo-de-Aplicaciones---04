// Tareas pequeñas
import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)}>Borrar</button>
    </div>
  );
}

export default TodoItem;
