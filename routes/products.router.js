const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

// Traer todos los productos
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

// Filtrar productos
router.get('/filter', (req, res) => {
  res.send('soy un filter');
});

// Traer un producto por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

// Crear un producto
router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

// Actualizar un producto
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
