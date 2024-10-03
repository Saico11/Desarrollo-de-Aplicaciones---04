import React, { useState } from 'react';

function Exp3Ejercicio1() {
  const [count, setCount] = useState(0); // Estado inicial del contador

  return (
    <div>
      <h3>Contador: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Exp3Ejercicio1;