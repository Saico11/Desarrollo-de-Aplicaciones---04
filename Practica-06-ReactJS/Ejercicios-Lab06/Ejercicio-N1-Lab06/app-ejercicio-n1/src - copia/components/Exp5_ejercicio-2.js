// src/components/FetchData.js
import React, { useState, useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Simulamos una llamada a una API
        setTimeout(() => {
            setData(['Elemento 1', 'Elemento 2', 'Elemento 3']);
        }, 2000);
    }, []);

    return (
        <div>
            <h3>Datos cargados:</h3>
            {data.length === 0 ? <p>Cargando datos...</p> : <ul>{data.map((item, index) => <li key={index}>{item}</li>)}</ul>}
        </div>
    );
}

export default FetchData;
