// Cabecera para la aplicacion, que incluye el navbar
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/todos">Lista de tareas</Link></li>
          <li><Link to="/add-task">Añadir tareas</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
