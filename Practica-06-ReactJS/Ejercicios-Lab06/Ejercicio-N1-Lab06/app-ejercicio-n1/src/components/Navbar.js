import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de react-router-dom

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/experiencia03">Experiencia 03</Link></li>
        <li><Link to="/experiencia04">Experiencia 04</Link></li>
        <li><Link to="/experiencia05">Experiencia 05</Link></li>
        <li><Link to="/experiencia06">Experiencia 06</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
