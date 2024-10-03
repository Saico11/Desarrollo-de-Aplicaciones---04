// src/components/NestedRoutes.js
import React, { useState } from 'react';

function Topic({ topic }) {
    return <h3>{topic}</h3>;
}

function Topics() {
    // Simulamos los "temas" sin usar rutas dinámicas.
    const [selectedTopic, setSelectedTopic] = useState(null);

    return (
        <div>
            <h2>Temas</h2>
            <ul>
                {/* Reemplazamos los enlaces dinámicos con una lógica de selección simple */}
                <li><a href="#react" onClick={() => setSelectedTopic('React')}>React</a></li>
                <li><a href="#router" onClick={() => setSelectedTopic('React Router')}>React Router</a></li>
            </ul>

            {/* Mostramos el contenido del tema seleccionado */}
            {selectedTopic && <Topic topic={selectedTopic} />}
        </div>
    );
}

function NestedRoutes() {
    return (
        <div>
            <h2>Rutas Anidadas</h2>
            <Topics />
        </div>
    );
}

export default NestedRoutes;
