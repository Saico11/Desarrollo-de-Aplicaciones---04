// src/components/TodoForm.js
import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Task cannot be empty.');
      return;
    }

    // Creamos una nueva tarea con un ID temporal
    const newTodo = {
      id: Math.random(), // Generar un ID temporal
      title: title,
      completed: false,
    };

    addTodo(newTodo);  // Agregamos la nueva tarea a la lista
    setTitle('');      // Limpiamos el campo de entrada después de agregar
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
