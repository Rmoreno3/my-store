const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No limit or offset');
  }
});

app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 1',
    price: 1000,
  });
});

app.get('/categories', (req, res) => {
  const { categoryId } = req.params;

  res.json([
    {
      categoryId,
      name: 'Food',
      products: [],
    },
    {
      categoryId,
      name: 'Drink',
      products: [],
    },
  ]);
});

app.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;

  res.json({
    categoryId,
    categori: 'Food',
    products: [],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
