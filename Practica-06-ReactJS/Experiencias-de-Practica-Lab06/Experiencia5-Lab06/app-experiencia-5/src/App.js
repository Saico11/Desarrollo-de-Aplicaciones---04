import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DataFetcher from './components/DataFetcher/DataFetcher';

const App = () => {
  return (
    <div>
      <Header title="Experiencia N° 05: Manejo de Hooks" />
      <div style={{ textAlign: 'center' }}>
        <DataFetcher />
      </div>
      <Footer year={2024} />
    </div>
  );
};

export default App;
