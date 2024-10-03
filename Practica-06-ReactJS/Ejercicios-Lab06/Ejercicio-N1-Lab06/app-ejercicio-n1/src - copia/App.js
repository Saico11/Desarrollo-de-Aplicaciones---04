// src/App.js
import React from 'react';
import Experience03 from './pages/Experiencia03';
import Experience04 from './pages/Experiencia04';
import Experience05 from './pages/Experiencia05';
import Experience06 from './pages/Experiencia06';
import Header from './components/Cabecera';
import './App.css';


function App() {
    return (
        <div>
            {/* El encabezado estará disponible en todas las páginas */}
            <Header />
            
            <main>
                {/* Puedes mostrar el contenido de las experiencias directamente */}
                <Experience03 />
                <Experience04 />
                <Experience05 />
                <Experience06 />
            </main>
        </div>
    );
}

export default App;
