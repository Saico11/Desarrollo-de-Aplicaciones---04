var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Rutas
router.route('/products')
    .post(async function (req, res) {
        try {
            var product = new Product();
            product.name = req.body.name;
            product.amount = req.body.amount;
            product.description = req.body.description;

            // Usar await para esperar la operación de guardado
            await product.save();
            res.json({ message: "Producto registrado con éxito" });
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error);
        }
    })
    .get(async function (req, res) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error);
        }
    });

module.exports = router;