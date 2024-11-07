// Importar el módulo express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Importar el enrutador
const rutas = require('./rutas');

// Usar el enrutador
app.use('/', rutas);

// Hacer que el servidor escuche en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
  console.log(`El servidor está escuchando en el puerto ${puerto}`);
});
