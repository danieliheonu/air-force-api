import User from "../models/user.model";
import { BadRequestException, NotFoundException } from "../utils/serviceExceptions";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const logUser = async (email: string, password: string) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new NotFoundException("User not found");
	}

	const result = await bcrypt.compare(password, user.password);
	if (!result) throw new BadRequestException("Invalid Credentials");

	const accessToken = jwt.sign({ _id: user._id }, `${process.env.JWT_SECRET}`, {
		expiresIn: "24h",
	});

	return accessToken;
};

export const createUser = async (email: string, password: string) => {
	if (await User.exists({ email })) throw new BadRequestException("User already exists");

	return User.create({ email, password });
};
