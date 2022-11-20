import { Request, Response, NextFunction } from "express";
import {
	getCrewMembersUnderShip,
	transferCrewMember,
} from "../services/ships.service";

export const retrieveAllCrewMembersUnderShip = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const crewMembers = await getCrewMembersUnderShip(id);

		return res.status(200).json({
			message: "Crew members retrieved successfully",
			data: crewMembers,
		});
	} catch (err: any) {
		next(err);
	}
};

export const transferCrewMemberToShip = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { fromShip, toShip, crewMemberId } = req.body;
		const crewMembers = await transferCrewMember(fromShip, toShip, crewMemberId);

		return res
			.status(200)
			.json({ message: "Crew member transferred successfully", data: crewMembers });
	} catch (err: any) {
		next(err);
	}
};
