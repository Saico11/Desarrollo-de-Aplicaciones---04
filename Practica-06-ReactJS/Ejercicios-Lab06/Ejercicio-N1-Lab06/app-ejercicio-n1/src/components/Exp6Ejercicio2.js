import React, { useState } from 'react';

function Exp6Ejercicio2() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Controla si el usuario está autenticado

  const handleLogin = () => {
    setIsAuthenticated(true); // Simulamos el login
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Simulamos el logout
  };

  return (
    <div>
      <h2>{isAuthenticated ? 'Bienvenido, Usuario!' : 'Por favor, inicia sesión'}</h2>
      
      {/* Botón para iniciar o cerrar sesión */}
      <button onClick={isAuthenticated ? handleLogout : handleLogin}>
        {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
      </button>

      {/* Contenido protegido */}
      {isAuthenticated ? (
        <div>
          <h3>Esta es una página privada</h3>
          <p>Solo puedes ver esto si estás autenticado.</p>
        </div>
      ) : (
        <p>No tienes acceso a esta página.</p>
      )}
    </div>
  );
}

export default Exp6Ejercicio2;
