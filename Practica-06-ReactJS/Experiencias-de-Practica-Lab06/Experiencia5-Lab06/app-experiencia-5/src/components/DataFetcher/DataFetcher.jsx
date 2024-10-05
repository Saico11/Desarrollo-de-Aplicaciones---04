import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  // Definir el estado
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Uso de useEffect
  useEffect(() => {
    console.log('Recuperando los datos...');
    setTimeout(() => {
      setData([
        { id: 1, name: 'No te lo puedo creer' },
        { id: 2, name: 'El diablo es puerco' },
        { id: 3, name: 'Que ven mis oidos mano' },
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Recuperación de datos con useEffect</h2>
      {loading ? <p>CARGANDO...</p> : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
