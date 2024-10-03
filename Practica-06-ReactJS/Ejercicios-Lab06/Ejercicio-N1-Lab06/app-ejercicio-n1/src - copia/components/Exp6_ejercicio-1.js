// src/components/RoutingExample.js
import React from 'react';

function Home() {
    return <h2>Inicio</h2>;
}

function About() {
    return <h2>Acerca de Nosotros</h2>;
}

function RoutingExample() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#about">Acerca de</a></li>
                </ul>
            </nav>

            {/* Aquí simplemente puedes mostrar ambas secciones de contenido */}
            <section id="inicio">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
        </div>
    );
}

export default RoutingExample;
