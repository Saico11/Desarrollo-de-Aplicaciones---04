import { Link, Route, Routes } from 'react-router-dom';

const Portafolio = () => <p>Portafolio en proceso...</p>;
const Info = () => <p>Información en proceso...</p>;

const About = () => {
  return (
    <div className="card">
      <h2>Sobre mi</h2>
      <p>Hola, soy estudiante de Ing. de Chistemas de la UCSM y estoy haciendo el trabajo para Desarrollo de Aplicaciones</p>
      <img src="https://miro.medium.com/v2/resize:fit:960/1*h7GMfvHKvLPkynG9NvULJw.gif" alt="react-icon" style={{ display: 'block', margin: '0 auto', width: '20%' }}></img>
      <nav>
        <ul>
          <li>
            <Link to="history">Portafolio</Link>
          </li>
          <li>
            <Link to="team">Información</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default About;
