import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ShowTheme = () => {
  const { theme } = useContext(ThemeContext);  // Consumimos el contexto

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>Tema actual: {theme}</h1>
    </div>
  );
};

export default ShowTheme;
