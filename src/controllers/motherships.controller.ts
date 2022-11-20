import { Response, NextFunction } from "express";
import * as mothershipService from "../services/motherships.service";
import { Request } from "express-jwt";

export const createMotherShip = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name } = req.body;
		const motherShip = await mothershipService.createMotherShip(name, req.auth?._id);

		return res.status(201).json({
			message: "Mothership created successfully",
			data: motherShip,
		});
	} catch (err: any) {
		next(err);
	}
};

export const retrieveMotherShip = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const motherShip = await mothershipService.getMotherShip(id);

		return res.status(200).json({
			message: "Mothership retrieved successfully",
			data: motherShip,
		});
	} catch (err: any) {
		next(err);
	}
};

export const retrieveAllMotherShips = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const motherShips = await mothershipService.getMotherShips(req.auth?._id);

		return res.status(200).json({
			message: "Motherships retrieved successfully",
			data: motherShips,
		});
	} catch (err: any) {
		next(err);
	}
};

export const addShipToMotherShip = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const { ships } = req.body;
		await mothershipService.addShipToMotherShip(id, ships);

		return res.status(200).json({
			message: "Ship added to mothership successfully",
		});
	} catch (err: any) {
		next(err);
	}
};

export const removeShipFromMotherShip = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { mothershipId, shipId } = req.params;
		await mothershipService.removeShipFromMotherShip(mothershipId, shipId);

		return res.status(200).json({
			message: "Ship removed from mothership successfully",
		});
	} catch (err: any) {
		next(err);
	}
};

export const retrieveAllShipsUnderMotherShip = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const ships = await mothershipService.getShipsUnderMotherShip(id);

		return res.status(200).json({
			message: "Ships retrieved successfully",
			data: ships,
		});
	} catch (err: any) {
		next(err);
	}
};
