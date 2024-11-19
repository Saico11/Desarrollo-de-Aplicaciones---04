// app.js
const express = require('express');
const bodyParser = require('body-parser');
const gamesRoutes = require('./routes/games');

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/api', gamesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
