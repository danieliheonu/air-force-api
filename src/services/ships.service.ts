import Ship from "../models/ships.model";
import Crew from "../models/crews.model";
import { Types } from "mongoose";
import { BadRequestException, NotFoundException } from "../utils/serviceExceptions";

export const createAShip = async (name: string, mothership: Types.ObjectId) => {
	const ship = await Ship.create({ name, mothership });
	await Crew.insertMany([
		{ name: "crew1", ship: ship._id },
		{ name: "crew2", ship: ship._id },
		{ name: "crew3", ship: ship._id },
	]);

	return ship;
};

export const getCrewMembersUnderShip = async (shipId: string) => {
	if (!(await Ship.exists({ _id: shipId }))) {
		throw new NotFoundException("Ship not found");
	}

	const crewMembers = await Crew.find({ ship: shipId });

	return crewMembers;
};

export const transferCrewMember = async (
	fromShipId: string,
	toShipId: string,
	crewMemberId: string
) => {
	const toShip = await Ship.findById(toShipId).populate("crews");
	if (!toShip) throw new NotFoundException("Ship not found");

	const crewMemberExists = await Crew.exists({_id: crewMemberId, ship: fromShipId});
	if (!crewMemberExists) throw new NotFoundException("Crew member not found");

	if (toShip.crews.length > 5)
		throw new BadRequestException(
			`You cannot have more than 5 Crew Members. You currently have ${toShip.crews.length} members`
		);

	const crewMember = await Crew.findByIdAndUpdate(crewMemberId, { ship: toShipId }, { new: true });
	
	return crewMember;
};
