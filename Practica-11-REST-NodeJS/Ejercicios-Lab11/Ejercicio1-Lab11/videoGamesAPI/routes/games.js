// routes/games.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

// GET: Listar todos los videojuegos
router.get('/games', (req, res) => {
    connection.query('SELECT * FROM games', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
});

// POST: Agregar un nuevo videojuego
router.post('/games', (req, res) => {
    const { title, genre, platform } = req.body;
    const query = 'INSERT INTO games (title, genre, platform) VALUES (?, ?, ?)';
    connection.query(query, [title, genre, platform], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: result.insertId, title, genre, platform });
        }
    });
});

// PUT: Actualizar un videojuego
router.put('/games/:id', (req, res) => {
    const { id } = req.params;
    const { title, genre, platform } = req.body;
    const query = 'UPDATE games SET title = ?, genre = ?, platform = ? WHERE id = ?';
    connection.query(query, [title, genre, platform, id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Game updated successfully' });
        }
    });
});

// DELETE: Eliminar un videojuego
router.delete('/games/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM games WHERE id = ?';
    connection.query(query, [id], (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Game deleted successfully' });
        }
    });
});

module.exports = router;
