const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const email = Joi.string().email();
const gender = Joi.string().valid('male', 'female');

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  gender: gender.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  gender: gender,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
};
