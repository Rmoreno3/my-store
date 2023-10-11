const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
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
