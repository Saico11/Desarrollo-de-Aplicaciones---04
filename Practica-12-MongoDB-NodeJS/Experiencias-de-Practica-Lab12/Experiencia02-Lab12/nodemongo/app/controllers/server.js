var express = require('express');
var app = express();
var Router = require('./app/controllers/routes');

var port = 3000;

// Usar las rutas definidas
app.use('/api', Router);

// Iniciar el servidor
app.listen(port, function () {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
