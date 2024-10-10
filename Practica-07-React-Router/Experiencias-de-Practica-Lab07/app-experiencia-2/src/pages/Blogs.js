const Blogs = () => {
  return (
    <div className="card">
      <h1>Blog Articles</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src="https://phantom-marca-mx.unidadeditorial.es/d58f4d3a57f9b0fb9648f96f70ea0c4d/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/10/07/17283288255974.jpg" 
          alt="Blog" 
          style={{ display: 'block', margin: '0 auto', width: '25%', borderRadius: '8px' }}
        />
        <h2>Huracán  Milton</h2>
        <p style={{ margin: '20px'}}>El Huracán Milton continúa intensificándose mientras se acerca a las costas de México. 
          Este nuevo fenómeno meteorológico ha amenazado el país, ya que se ha reportado que consigo 
          traería lluvias intensas y fuertes vientos en estados como Campeche, Yucatán y Veracruz; los cuales 
          también presentarían inundaciones.</p>
      </div>
    </div>
  );
};

export default Blogs;
