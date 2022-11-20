import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

export const login = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;
		const accessToken = await userService.logUser(email, password);

		return res.status(200).json({ message: "Login Successful", access: accessToken });
	} catch (err: any) {
		next(err);
	}
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;
		await userService.createUser(email, password);

		return res.status(201).json({ message: "User created successfully" });
	} catch (err) {
		next(err);
	}
};
