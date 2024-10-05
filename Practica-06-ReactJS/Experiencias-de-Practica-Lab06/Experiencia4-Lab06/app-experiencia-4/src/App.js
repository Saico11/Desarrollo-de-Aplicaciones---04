import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CounterClass from './components/CounterClass/CounterClass';
import CounterFunction from './components/CounterFunction/CounterFunction';

const App = () => {
  return (
    <div>
      <Header title="Experiencia N° 04: Manejo de Estados en ReactJS" />
      <div style={{ textAlign: 'center' }}>
        <CounterClass />
        <CounterFunction />
      </div>
      <Footer year={2024} />
    </div>
  );
};

export default App;