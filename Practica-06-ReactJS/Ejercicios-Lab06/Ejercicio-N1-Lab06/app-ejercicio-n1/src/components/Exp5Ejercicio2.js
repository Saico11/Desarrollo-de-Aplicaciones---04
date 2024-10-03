import React, { useState, useEffect } from 'react';

function Exp5Ejercicio2() {
  const [seconds, setSeconds] = useState(0); // Estado para los segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Actualizamos el estado cada segundo
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que el efecto solo se ejecuta al montar

  return (
    <div>
      <h3>Temporizador: {seconds} segundos</h3>
    </div>
  );
}

export default Exp5Ejercicio2;
