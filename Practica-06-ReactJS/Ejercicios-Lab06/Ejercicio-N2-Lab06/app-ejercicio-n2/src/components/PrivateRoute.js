// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Usamos Navigate en lugar de Redirect

function PrivateRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" />; // Si no está autenticado, redirige al login
}

export default PrivateRoute;
