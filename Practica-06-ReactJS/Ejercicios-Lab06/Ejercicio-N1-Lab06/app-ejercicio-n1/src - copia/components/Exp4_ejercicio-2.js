// src/components/ChangeColor.js
import React, { useState } from 'react';

function ChangeColor() {
    const [color, setColor] = useState('white');

    const changeToRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    };

    return (
        <div style={{ backgroundColor: color, padding: '20px' }}>
            <p>El color de fondo actual es: {color}</p>
            <button onClick={changeToRandomColor}>Cambiar Color</button>
        </div>
    );
}

export default ChangeColor;
