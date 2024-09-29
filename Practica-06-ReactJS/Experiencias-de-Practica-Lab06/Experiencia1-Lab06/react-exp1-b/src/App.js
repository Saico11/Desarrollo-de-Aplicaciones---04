import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>Bienvenido a ReactJS</h1>
            <p>Para la experiencia 1 (b) de Desarrollo de Aplicaciones. Se instaló NPM y Node.JS para su funcionamiento</p>
            <button onClick={() => alert('¿Por qué lo hiciste?')}>
                No hacer click aquí
            </button>
        </div>
    );
}

export default App;
