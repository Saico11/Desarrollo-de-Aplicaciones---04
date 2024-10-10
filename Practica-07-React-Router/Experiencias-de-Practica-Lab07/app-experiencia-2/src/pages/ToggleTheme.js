import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);  // Consumimos la función para cambiar el tema

  return (
    <div class="button-container">
        <button onClick={toggleTheme}>
        Cambiar tema
        </button>
    </div>
  );
};

export default ToggleTheme;
