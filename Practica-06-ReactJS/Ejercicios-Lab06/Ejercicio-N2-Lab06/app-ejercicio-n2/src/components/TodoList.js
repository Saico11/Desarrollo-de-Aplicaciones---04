// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoItem from './TodoItem';
import axios from 'axios';
import './TodoList.css';

function TodoList({ todos, setTodos, deleteTodo }) {
  const [hasLoadedDefaultTasks, setHasLoadedDefaultTasks] = useState(false);  // Estado para evitar recargar las tareas por defecto
  const navigate = useNavigate();

  // Cargar tareas por defecto desde una API solo la primera vez que se carga el componente
  useEffect(() => {
    // Solo cargamos las tareas predeterminadas si no se han cargado antes
    if (!hasLoadedDefaultTasks && todos.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => {
          setTodos(response.data);
          setHasLoadedDefaultTasks(true);  // Marcar como que las tareas ya se han cargado
        })
        .catch(error => console.error('Error fetching default tasks:', error));
    }
  }, [hasLoadedDefaultTasks, setTodos, todos.length]);

  return (
    <div className="todo-list">
      <h2>Your Todo List</h2>
      {todos.length === 0 && <p>No tasks available.</p>}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}

      {/* Botón para agregar una nueva tarea */}
      <button onClick={() => navigate('/add-task')} className="add-task-btn">
        Add Task
      </button>
    </div>
  );
}

export default TodoList;
