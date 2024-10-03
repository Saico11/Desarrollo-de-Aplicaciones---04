import React from 'react';
import Exp3Ejercicio1 from './Exp3Ejercicio1';
import Exp3Ejercicio2 from './Exp3Ejercicio2';

function Experiencia03() {
  return (
    <div>
      <h1>Experiencia 03 - Desarrollo de Componentes</h1>
      <h2>Ejercicio 1: Contador simple</h2>
      <p>Un contador simple que utiliza eventos y estado para incrementar y decrementar el valor del contador.</p>
      <Exp3Ejercicio1 />
      <h2>Ejercicio 2: Mostrar/Ocultar texto</h2>
      <p>Un botón que permite mostrar/ocultar texto, utilizando el estado para alternar la visibilidad del texto.</p>
      <Exp3Ejercicio2 />
    </div>
  );
}

export default Experiencia03;
