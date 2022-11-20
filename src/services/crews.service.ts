import Crew from "../models/crews.model";
import Ship from "../models/ships.model";
import { BadRequestException, NotFoundException } from "../utils/serviceExceptions";

export const createNewCrewMember = async (name: string, shipId: string) => {
	if (!await Ship.exists({ _id: shipId })) {
		throw new NotFoundException("Ship not found");
	}
	const crewLength = await Crew.find({ ship: shipId }).countDocuments();
	if (crewLength >= 5)
		throw new BadRequestException(
			`You cannot have more than 5 Crew Members. You currently have ${crewLength} members`
		);
	const crew = await Crew.create({ name, ship: shipId });

	return crew;
};

export const getCrewMember = async (id: string) => {
	const crew = await Crew.findById(id);
	if (!crew) throw new NotFoundException("Crew Member not found");
	
	return crew;
};
