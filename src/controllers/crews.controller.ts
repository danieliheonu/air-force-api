import { Request, Response, NextFunction } from "express";
import * as crewService from "../services/crews.service";

export const createCrewMember = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, shipId } = req.body;
		const crew = await crewService.createNewCrewMember(name, shipId);

		return res.status(201).json({
			success: true,
			message: "Crew member created successfully",
			data: crew,
		});
	} catch (err: any) {
		next(err);
	}
};

export const getCrewMember = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const crew = await crewService.getCrewMember(id);

		return res.status(200).json({
			success: true,
			message: "Crew member retrieved successfully",
			data: crew,
		});
	} catch (err: any) {
		next(err);
	}
};
