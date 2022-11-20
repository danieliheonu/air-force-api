import { validate, Joi } from "express-validation";

export const validateTransfer = validate({
	body: Joi.object({
		toShip: Joi.string().required(),
		fromShip: Joi.string().required(),
		crewMemberId: Joi.string().required(),
	}),
});
