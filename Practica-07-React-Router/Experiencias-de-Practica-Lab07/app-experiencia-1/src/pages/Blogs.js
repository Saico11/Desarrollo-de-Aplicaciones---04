const Blogs = () => {
  return (
    <div className="card">
      <h1>Blog Articles</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src="https://e.rpp-noticias.io/xlarge/2024/10/03/152215_1650695.webp" 
          alt="Blog" 
          style={{ display: 'block', margin: '0 auto', width: '25%', borderRadius: '8px' }}
        />
        <h2>Paro nacional de transportistas</h2>
        <p style={{ margin: '20px'}}>La incertidumbre sobre un posible paro nacional continúa 
          luego de que los transportistas continúan haciendo sus exigencias y pedidos al Gobierno 
          —y al Congreso — para luchar contra la delincuencia tras los múltiples asesinatos a sus 
          integrantes en los últimos meses. Es por ellos que varios representantes ya se reúnen para 
          evaluar la fecha de una paralización en todo el país..</p>
      </div>
    </div>
  );
};

export default Blogs;
