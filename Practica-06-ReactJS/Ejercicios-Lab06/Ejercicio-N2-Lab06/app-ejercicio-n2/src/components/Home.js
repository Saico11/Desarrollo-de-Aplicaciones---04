// Componente de Inicio
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido al Ejercicio 2: Miniproyecto</h1>
      <p>Esta es una aplicación de lista de tareas colaborativa donde puedes agregar y eliminar tareas.</p>
      <p>Para comenzar, selecciona la opción "Todo List" en el menú superior para ver tus tareas o agregar una nueva tarea.</p>
      <p>La aplicación está construida con React utilizando estados, hooks y rutas, lo que permite una navegación fluida entre las diferentes secciones de la página.</p>
      <img src="https://cdn.icon-icons.com/icons2/3398/PNG/512/react_logo_icon_214748.png"></img>
    </div>
  );
}

export default Home;
