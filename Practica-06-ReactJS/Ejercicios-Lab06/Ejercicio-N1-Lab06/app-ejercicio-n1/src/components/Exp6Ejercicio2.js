import React, { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function PublicPage() {
  return <h2>Página Pública: Esta página es accesible para todos.</h2>;
}

function PrivatePage() {
  return (
    <div>
      <h3>Esta es una página privada</h3>
      <p>Solo puedes ver esto si estás autenticado.</p>
    </div>
  );
}

function Exp6Ejercicio2() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Controla si el usuario está autenticado

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulamos el login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulamos el logout
  };

  return (
    <div className="card">
      <nav>
        <ul>
          <li><Link to="">Página Pública</Link></li>
          <li><Link to="private">Página Privada</Link></li> {/* Ruta relativa */}
        </ul>
      </nav>

      <h2>{isAuthenticated ? 'Bienvenido, Usuario!' : 'Por favor, inicia sesión'}</h2>
      
      {/* Botón para iniciar o cerrar sesión */}
      <button onClick={isAuthenticated ? handleLogout : handleLogin}>
        {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>

      <Routes>
        <Route path="" element={<PublicPage />} />
        <Route
          path="private"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <PrivatePage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Outlet />
    </div>
  );
}

export default Exp6Ejercicio2;
