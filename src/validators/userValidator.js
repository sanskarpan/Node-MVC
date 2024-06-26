const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
});

const idSchema = Joi.string().hex().length(24).required();

module.exports = {
    validateUser: (data) => userSchema.validate(data),
    validateId: (data) => idSchema.validate(data)
};
