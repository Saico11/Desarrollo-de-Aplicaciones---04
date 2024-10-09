import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './pages/UserProvider';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Component1 from './pages/Component1';
import Component2 from './pages/Component2';
import './index.css';

function App() {
  return (
    <UserProvider>  {/* Envolvemos la aplicación con UserProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="component1" element={<Component1 />} />  {/* Ruta para el componente que consume contexto */}
            <Route path="component2" element={<Component2 />} />  {/* Ruta para el componente que modifica el contexto */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
