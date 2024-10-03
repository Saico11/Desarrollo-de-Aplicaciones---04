// src/components/Logger.js
import React, { useState, useEffect } from 'react';

function Logger() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador ha cambiado a: ${count}`);
    }, [count]);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
    );
}

export default Logger;
