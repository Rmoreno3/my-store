const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();
const service = new UsersService();

// Traer todos los usuarios
router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

// Crear un usuario
router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

// Traer un usuario por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Actualizar un usuario
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body);
  res.json(user);
});

// Eliminar un usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
