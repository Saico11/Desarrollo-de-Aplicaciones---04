import React, { useState, useEffect } from 'react';

function Exp5Ejercicio1() {
  const [users, setUsers] = useState([]); // Estado para almacenar los datos de usuarios
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // useEffect para hacer el fetch cuando el componente se monta
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Actualizamos el estado con los usuarios obtenidos
        setLoading(false); // Cambiamos el estado de carga a falso
      });
  }, []); // El array vacío asegura que solo se ejecuta al montar el componente

  if (loading) {
    return <p>Cargando usuarios...</p>; // Mostramos un mensaje mientras se cargan los datos
  }

  return (
    <div className="card">
      <h3>Lista de Usuarios:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exp5Ejercicio1;
