import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import Home from './components/Home';
import './App.css';

function App() {
  // Tareas Predeterminadas creadas al iniciar la aplicación
  const initialTodos = [
    { id: 1, title: "Aprender sobre el React" },
    { id: 2, title: "Construir una aplicación de tareas" },
    { id: 3, title: "Investigar acerca de CSS avanzado"}
  ];

  const [todos, setTodos] = useState(initialTodos);  // Estado global de las tareas

  // Función para agregar una nueva tarea
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
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
          <Route path="/todos" element={<TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />} />
          <Route path="/add-task" element={<AddTask addTodo={addTodo} />} />  {/* Pasamos `addTodo` */}
          <Route path="/" element={<Home />} />
        </Routes>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
