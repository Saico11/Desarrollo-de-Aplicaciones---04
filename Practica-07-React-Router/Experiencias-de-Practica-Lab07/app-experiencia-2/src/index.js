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
import User from './pages/User';
import ChangeUser from './pages/ChangeUser';
import ThemeProvider from './pages/ThemeProvider';  // Importamos el proveedor del tema
import ShowTheme from './pages/ShowTheme';
import ToggleTheme from './pages/ToggleTheme';
import './index.css';

function App() {
  return (
    <UserProvider>  {/* Envolvemos la aplicación con UserProvider */}
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="component1" element={<Component1 />} />
              <Route path="component2" element={<Component2 />} />
              {/* Nuevas rutas para el tema */}
              <Route path="user" element={<User />} />
              <Route path="change-user" element={<ChangeUser />} />
              <Route path="/show-theme" element={<ShowTheme />} />
              <Route path="/toggle-theme" element={<ToggleTheme />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
