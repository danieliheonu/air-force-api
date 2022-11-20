import { validate, Joi } from "express-validation";

export const validateCreateMothership = validate({
	body: Joi.object({
		name: Joi.string().required(),
	}),
});

export const validateAddShip = validate({
	body: Joi.object({
		ships: Joi.number().strict().required(),
	}),
});
