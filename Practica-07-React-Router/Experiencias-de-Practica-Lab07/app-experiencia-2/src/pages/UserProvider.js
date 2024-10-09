import { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  // Estado del usuario compartido por todos los componentes
  const [user, setUser] = useState("John Doe");

  return (
    // Proveemos el estado "user" y la función "setUser" a todos los componentes hijos
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
