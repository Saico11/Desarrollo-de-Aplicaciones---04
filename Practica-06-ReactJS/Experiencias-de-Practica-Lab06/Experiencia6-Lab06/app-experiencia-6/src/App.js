import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importa las herramientas de routing
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Memes/Memes';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Header title="Experiencia N° 06: Manejo de Routing" />
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre mi</Link>
          </li>
          <li>
            <Link to="/contact">Memes</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link> {/* Enlace al dashboard privado */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>

      <Footer year={2024} />
    </Router>
  );
};

export default App;
