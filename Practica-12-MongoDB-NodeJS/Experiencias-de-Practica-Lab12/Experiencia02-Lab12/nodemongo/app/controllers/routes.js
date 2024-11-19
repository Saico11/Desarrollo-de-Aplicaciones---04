var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Rutas
router.route('/products')
    .post(function (req, res) {
        var product = new Product();
        product.name = req.body.name;
        product.amount = req.body.amount;
        product.description = req.body.description;

        product.save(function (error) {
            if (error) res.status(500).send("Error en el servicio: " + error);
            res.json({ message: "Producto registrado con éxito" });
        });
    })
    .get(function (req, res) {
        Product.find(function (error, products) {
            if (error) res.status(500).send("Error en el servicio: " + error);
            res.json(products);
        });
    });

module.exports = router;
