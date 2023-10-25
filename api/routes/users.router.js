const express = require('express');
const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
} = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

// Traer todos los usuarios
router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Crear un usuario
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = await req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  },
);

// Traer un usuario por id
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res) => {
    const { id } = await req.params;
    const user = await service.findOne(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  },
);

// Actualizar un usuario
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = await req.params;
      const body = await req.body;
      const user = await service.update(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

// Eliminar un usuario
router.delete(
  '/:id',
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = await req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
