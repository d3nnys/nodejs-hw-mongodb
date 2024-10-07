import Joi from 'joi';
import { contactTypeList } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.min': `"name" should have at least {#limit} characters`,
    'string.max': `"name" should have at most {#limit} characters`,
    'any.required': `"name" is a required field`,
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': `"email" should be a type of 'text'`,
    'string.min': `"email" should have at least {#limit} characters`,
    'string.max': `"email" should have at most {#limit} characters`,
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': `"isFavourite" should be a boolean value (true or false)`,
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': `"phoneNumber" should be a type of 'text'`,
    'string.min': `"phoneNumber" should have at least {#limit} characters`,
    'string.max': `"phoneNumber" should have at most {#limit} characters`,
    'any.required': `"phoneNumber" is a required field`,
  }),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid(...contactTypeList)
    .required()
    .messages({
      'string.base': `"contactType" should be a type of 'text'`,
      'string.min': `"contactType" should have at least {#limit} characters`,
      'string.max': `"contactType" should have at most {#limit} characters`,
      'any.only': `"contactType" must be one of the following values: ${contactTypeList.join(
        ', ',
      )}`,
      'any.required': `"contactType" is a required field`,
    }),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.min': `"name" should have at least {#limit} characters`,
    'string.max': `"name" should have at most {#limit} characters`,
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': `"email" should be a type of 'text'`,
    'string.min': `"email" should have at least {#limit} characters`,
    'string.max': `"email" should have at most {#limit} characters`,
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': `"isFavourite" should be a boolean value (true or false)`,
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': `"phoneNumber" should be a type of 'text'`,
    'string.min': `"phoneNumber" should have at least {#limit} characters`,
    'string.max': `"phoneNumber" should have at most {#limit} characters`,
  }),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid(...contactTypeList)
    .messages({
      'string.base': `"contactType" should be a type of 'text'`,
      'string.min': `"contactType" should have at least {#limit} characters`,
      'string.max': `"contactType" should have at most {#limit} characters`,
      'any.only': `"contactType" must be one of the following values: ${contactTypeList.join(
        ', ',
      )}`,
    }),
});
