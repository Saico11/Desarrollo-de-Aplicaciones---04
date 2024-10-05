import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Experiencia03 from './components/Experiencia03';
import Experiencia04 from './components/Experiencia04';
import Experiencia05 from './components/Experiencia05';
import Experiencia06 from './components/Experiencia06';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Ruta para la página de inicio */}
          <Route path="/experiencia03" element={<Experiencia03 />} />  {/* Ruta para Experiencia 03 */}
          <Route path="/experiencia04" element={<Experiencia04 />} />  {/* Ruta para Experiencia 04 */}
          <Route path="/experiencia05" element={<Experiencia05 />} />  {/* Ruta para Experiencia 05 */}
          <Route path="/experiencia06" element={<Experiencia06 />} />  {/* Ruta para Experiencia 06 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
