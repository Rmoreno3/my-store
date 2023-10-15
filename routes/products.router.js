const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

// Traer todos los productos
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

// Filtrar productos
router.get('/filter', (req, res) => {
  res.send('soy un filter');
});

// Crear un producto
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'product created',
    data: body,
  });
});

// Actualizar un producto
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'product updated partial',
    data: body,
    id,
  });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'product deleted',
    id,
  });
});

module.exports = router;
