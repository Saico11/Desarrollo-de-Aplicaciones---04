import React, { useState } from 'react';

function Exp3Ejercicio2() {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad del texto

  return (
    <div className="card">
      {isVisible && <p>Este es el texto que se puede mostrar u ocultar.</p>}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Ocultar' : 'Mostrar'} Texto
      </button>
    </div>
  );
}

export default Exp3Ejercicio2;