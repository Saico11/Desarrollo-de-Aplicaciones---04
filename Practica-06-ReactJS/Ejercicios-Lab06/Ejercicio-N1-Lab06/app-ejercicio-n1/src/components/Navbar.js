import React from 'react';

function Navbar({ setPage }) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setPage('home')}>Inicio</button></li>
        <li><button onClick={() => setPage('experiencia03')}>Experiencia 03</button></li>
        <li><button onClick={() => setPage('experiencia04')}>Experiencia 04</button></li>
        <li><button onClick={() => setPage('experiencia05')}>Experiencia 05</button></li>
        <li><button onClick={() => setPage('experiencia06')}>Experiencia 06</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
