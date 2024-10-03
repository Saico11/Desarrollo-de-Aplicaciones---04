import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Experiencia03 from './components/Experiencia03';
import Experiencia04 from './components/Experiencia04';
import Experiencia05 from './components/Experiencia05';
import Experiencia06 from './components/Experiencia06';


function App() {
  const [page, setPage] = useState('home'); // 'home' será la página inicial

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'experiencia03':
        return <Experiencia03 />;
      case 'experiencia04':
        return <Experiencia04 />;
      case 'experiencia05':
        return <Experiencia05 />;
      case 'experiencia06':
        return <Experiencia06 />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="container">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;
