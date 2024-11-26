const mongoose = require('mongoose');

// Configuración de la conexión
mongoose.connect('mongodb://localhost:27017/mondongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Conexión exitosa a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error de conexión:', err);
});

module.exports = mongoose;
