import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Paginas/HomePage';  // Manteniendo el nombre de archivo tal como lo tienes
import ProfilePage from './Paginas/ProfilePage'; // Manteniendo el nombre de archivo tal como lo tienes
import CounterPage from './Paginas/CounterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Página principal */}
        <Route path="/ProfilePage" element={<ProfilePage />} /> {/* Página de perfil, ruta '/ViewCV' */}
        <Route path="/CounterPage" element={<CounterPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
