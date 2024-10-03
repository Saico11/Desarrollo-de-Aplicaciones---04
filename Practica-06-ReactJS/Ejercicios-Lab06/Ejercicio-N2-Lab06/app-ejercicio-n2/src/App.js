// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);  // Estado global de las tareas

  // Función para agregar una nueva tarea
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);  // Agregar la nueva tarea a la lista de tareas existente
  };

  // Función para eliminar una tarea
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));  // Eliminar tarea por ID
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Pasamos el estado `todos`, `setTodos` y `deleteTodo` */}
          <Route path="/todos" element={<TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />} />
          <Route path="/add-task" element={<AddTask addTodo={addTodo} />} />  {/* Pasamos `addTodo` */}
          <Route path="/" element={<h1>Welcome to the Todo App</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
