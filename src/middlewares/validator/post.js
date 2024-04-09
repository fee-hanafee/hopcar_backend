const Joi = require("joi");

const validator = require("./validator");

const schemaCreate = Joi.object({
  licenseHead: Joi.string()
    .trim()
    .required()

    .messages({
      "string.empty": "license is required",
      "any.required": "license is required",
    }),
  licenseBody: Joi.number()
    .positive()
    .required()

    .messages({
      "string.empty": "license is required",
      "any.required": "license is required",
      "number.base": "license must be a number",
    }),
  city: Joi.string().trim().required().messages({
    "string.empty": "city is required",
    "any.required": "city is required",
  }),
  model: Joi.string().trim().required().messages({
    "string.empty": "model is required",
    "any.required": "model is required",
  }),
  type: Joi.string().trim().required().messages({
    "string.empty": "type is required",
    "any.required": "type is required",
  }),
}).unknown(true);

exports.validatePost = validator(schemaCreate);
