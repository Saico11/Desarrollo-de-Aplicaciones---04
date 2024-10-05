import React, { useState } from 'react';

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador con función: {count}</h2>
      <button onClick={incrementCount}>Aumentar</button>
    </div>
  );
};

export default CounterFunction;
