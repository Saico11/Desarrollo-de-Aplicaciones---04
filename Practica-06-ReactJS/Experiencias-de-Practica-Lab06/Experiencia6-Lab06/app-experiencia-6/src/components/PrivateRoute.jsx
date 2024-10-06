import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simulación de autenticación

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
