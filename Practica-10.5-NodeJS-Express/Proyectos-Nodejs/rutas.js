const express = require('express');
const router = express.Router();

// Importar el router de cursos
const cursosRouter = require('./routers/cursos');

// Usar el router de cursos para las rutas que comienzan con /cursos
router.use('/cursos', cursosRouter);

// Ruta para la página principal
router.get('/', (req, res) => {
  res.send('¡Hola desde la página principal!');
});

module.exports = router;