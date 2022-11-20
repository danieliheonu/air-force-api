import { validate, Joi } from "express-validation";

export const validateCreationOfCrewMember = validate({
	body: Joi.object({
		name: Joi.string().required(),
		shipId: Joi.string().required(),
	}),
});
