import { useState, createContext } from 'react';
import Component2 from './Component2';

// Crear el contexto del usuario
export const UserContext = createContext(null);

const Component1 = () => {
  const [user] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <div class="card">
        <h1>{`Hello ${user}!`}</h1>
      </div>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
