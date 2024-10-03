import React, { useState } from 'react';

function Exp6Ejercicio1() {
  const [route, setRoute] = useState('home'); // Controla la "ruta" activa

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <h2>Bienvenido a la Página de Inicio</h2>;
      case 'about':
        return <h2>Esta es la página de Acerca de</h2>;
      case 'contact':
        return <h2>Página de Contacto</h2>;
      default:
        return <h2>Página no encontrada</h2>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setRoute('home')}>Inicio</button>
        <button onClick={() => setRoute('about')}>Acerca de</button>
        <button onClick={() => setRoute('contact')}>Contacto</button>
      </nav>

      {/* Renderiza la página según la ruta seleccionada */}
      <div>{renderPage()}</div>
    </div>
  );
}

export default Exp6Ejercicio1;
