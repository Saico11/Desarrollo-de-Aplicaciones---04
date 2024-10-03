import React from 'react';
import Exp4Ejercicio1 from './Exp4Ejercicio1';
import Exp4Ejercicio2 from './Exp4Ejercicio2';

function Experiencia04() {
  return (
    <div>
      <h1>Experiencia 04 - Manejo de Estados</h1>
      
      {/* Ejercicio 1: Contador usando Clases */}
      <h2>Ejercicio 1: Contador con Clases</h2>
      <Exp4Ejercicio1 />

      {/* Ejercicio 2: Contador usando useState */}
      <h2>Ejercicio 2: Contador con Hook useState</h2>
      <Exp4Ejercicio2 />
    </div>
  );
}

export default Experiencia04;
