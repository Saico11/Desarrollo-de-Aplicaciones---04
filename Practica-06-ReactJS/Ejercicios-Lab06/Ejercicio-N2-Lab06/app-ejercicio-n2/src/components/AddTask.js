// src/components/AddTask.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTask.css';

function AddTask({ addTodo }) {
  const [title, setTitle] = useState('');  // Estado local para almacenar el nombre de la tarea
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('El nombre de la tarea no puede estar vacío.');
      return;
    }

    // Creamos una nueva tarea
    const newTodo = {
      id: Math.random(),  // Generamos un ID único temporalmente
      title: title,
      completed: false,
    };

    addTodo(newTodo);  // Llamamos a `addTodo` para agregar la nueva tarea al estado en `App.js`

    // Redirigimos de vuelta a la lista de tareas
    navigate('/todos');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
