const mongoose = require('./db');
const Schema = mongoose.Schema;

// Esquema para la colección
const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
});

module.exports = mongoose.model('Item', ItemSchema);
