import React, { useState } from 'react';

function Exp4Ejercicio2() {
  const [count, setCount] = useState(0);  // Inicializamos el estado del contador

  return (
    <div className="card">
      <h3>Contador con Hook useState: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}

export default Exp4Ejercicio2;
