const Home = () => {
  return (
    <div className="card">
      <h1>Home</h1>
      <h3>EXPERIENCIA DE PRÁCTICA N° 02: REACT CONTEXT</h3>
      <p>React Context es una forma de administrar el estado globalmente. Se puede usar junto con
useStateHook para compartir el estado entre componentes profundamente anidados más
fácilmente que useState solo.
El problema que busca resolver React Context es cuando el estado debe estar en manos del
componente principal más alto en la pila que requiere acceso al estado. Para ilustrar, tenemos
muchos componentes anidados. El componente en la parte superior e inferior de la pila necesita
acceso al estado. Para hacer esto sin contexto, necesitaremos pasar el estado como "props" a
través de cada componente anidado. Esto se llama "props drilling".</p>
    <img src="https://dotnettrickscloud.blob.core.windows.net/img/react/3720230724012943.webp" style={{ display: 'block', margin: '0 auto', width: '50%', borderRadius: '8px' }}></img>
    </div>
  );
};
  
export default Home;
  