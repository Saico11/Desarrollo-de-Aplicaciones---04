// src/pages/Experience05.js
import React from 'react';
import Logger from '../components/Exp5_ejercicio-1';
import FetchData from '../components/Exp5_ejercicio-2';

function Experience05() {
    return (
        <div>
            <h2>Experiencia N° 05: Manejo de Hooks</h2>
            <h3>Ejercicio 1: `useEffect` para Log</h3>
            <Logger />
            <h3>Ejercicio 2: `useEffect` para Simular API</h3>
            <FetchData />
        </div>
    );
}

export default Experience05;
