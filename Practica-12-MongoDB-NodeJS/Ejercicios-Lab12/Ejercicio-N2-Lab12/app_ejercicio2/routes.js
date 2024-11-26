const express = require('express');
const Item = require('./item'); // Modelo de datos
const router = express.Router();

// PUT: Actualizar un item
router.put('/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: 'Elemento actualizado', data: updatedItem });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar', error });
  }
});

// DELETE: Eliminar un item
router.delete('/items/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Elemento eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar', error });
  }
});

// Ruta GET para obtener todos los items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();  // Obtiene todos los items de la base de datos
    res.json(items);  // Retorna los items en formato JSON
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los items', error });
  }
});

module.exports = router;
