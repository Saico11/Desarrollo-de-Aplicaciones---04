import React from 'react';
import Exp5Ejercicio1 from './Exp5Ejercicio1';
import Exp5Ejercicio2 from './Exp5Ejercicio2';

function Experiencia05() {
  return (
    <div>
      <h1>Experiencia 05 - Manejo de Hooks</h1>
      
      {/* Ejercicio 1: Fetch de datos con useEffect */}
      <h2>Ejercicio 1: Fetch de Usuarios con useEffect</h2>
      <Exp5Ejercicio1 />

      {/* Ejercicio 2: Temporizador con useEffect */}
      <h2>Ejercicio 2: Temporizador con useEffect</h2>
      <Exp5Ejercicio2 />
    </div>
  );
}

export default Experiencia05;
