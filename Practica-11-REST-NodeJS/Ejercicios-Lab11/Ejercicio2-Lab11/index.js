const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API pública"
    });
});

app.post('/api/posts', verifiToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.status(403).json({ mensaje: "Token inválido o expirado" });
        } else {
            res.json({
                mensaje: "Post creado exitosamente",
                authData
            });
        }
    });
});

app.get('/api/user', verifiToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.status(403).json({ mensaje: "Token inválido o expirado" });
        } else {
            res.json({
                mensaje: "Datos del usuario autenticado",
                authData
            });
        }
    });
});

app.post('/api/login', (req, res) => {
   
    const user = {
        id: 1,
        username: "aruiz",
        email: "aruiz@gmail.com"
    };

    jwt.sign({ user }, 'secretkey', { expiresIn: '30m' }, (err, token) => {
        if (err) {
            res.status(500).json({ mensaje: "Error al generar el token" });
        } else {
            res.json({
                mensaje: "Inicio de sesión exitoso",
                token
            });
        }
    });
});

function verifiToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({ mensaje: "Token no proporcionado" });
    }
}

app.listen(5000, () => console.log("Servidor ejecutándose en el puerto 5000"));
