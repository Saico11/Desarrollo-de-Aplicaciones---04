// Lista de todas las tareas
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, deleteTodo }) {
  const navigate = useNavigate();

  return (
    <div className="todo-list">
      <h2>Lista de tareas</h2>
      {todos.length === 0 && <p>No hay tareas disponibles.</p>}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}

      {/* Botón para agregar una nueva tarea */}
      <button onClick={() => navigate('/add-task')} className="add-task-btn">
        Añadir tarea
      </button>
    </div>
  );
}

export default TodoList;
