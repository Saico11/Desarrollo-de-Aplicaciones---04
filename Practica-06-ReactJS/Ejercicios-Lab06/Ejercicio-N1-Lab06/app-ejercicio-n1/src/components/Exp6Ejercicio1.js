import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Bienvenido a la Página de Inicio</h2>;
}

function About() {
  return <h2>Esta es la página de Acerca de</h2>;
}

function Contact() {
  return <h2>Página de Contacto</h2>;
}

function Exp6Ejercicio1() {
  return (
    <div className="card">
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca de</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Exp6Ejercicio1;
