const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
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

router.get('/categories/:categoryId', (req, res) => {
  const { categoryId } = req.params;

  res.json({
    categoryId,
    categori: 'Food',
    products: [],
  });
});

module.exports = router;
