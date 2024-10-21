import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(4).max(20),
});

export const requestResetPwdSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPwdSchema = Joi.object({
  password: Joi.string().min(4).max(20).required(),
  token: Joi.string().required(),
});
