// src/components/StateCounter.js
import React, { useState } from 'react';

function StateCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
        </div>
    );
}

export default StateCounter;
