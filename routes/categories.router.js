const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;

  res.json({
    categoryId,
    categori: 'Food',
    products: [],
  });
});

module.exports = router;
