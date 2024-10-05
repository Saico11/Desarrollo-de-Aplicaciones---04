import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserList from './components/UserList/UserList';
import ActionButton from './components/ActionButton/ActionButton';

const App = () => {
  return (
    <div>
      <Header title="Experiencia N° 03: Desarrollo de Componentes" />
      <UserList />
      <ActionButton />
      <Footer year={2024} />
    </div>
  );
};

export default App;
