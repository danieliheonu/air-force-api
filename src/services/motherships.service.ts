import MotherShip, { MotherShipDocument } from "../models/motherships.model";
import { createAShip } from "./ships.service";
import User from "../models/user.model";
import { BadRequestException, NotFoundException } from "../utils/serviceExceptions";
import Ship from "../models/ships.model";
import Crew from "../models/crews.model";

export const createMotherShip = async (name: string, user: string): Promise<MotherShipDocument> => {
	const userExists = await User.exists({ _id: user });
	if (!userExists) throw new NotFoundException("User not found");

	const motherShip = await MotherShip.create({ name, user });

	const ships = [];

	for (let i = 0; i < 3; i++) {
		ships.push(createAShip(`ship${i + 1}`, motherShip._id));
	}
	await Promise.all(ships);

	return motherShip;
};

export const getMotherShip = async (id: string) => {
	const motherShip = await MotherShip.findById(id).populate("ships").lean();

	if (!motherShip) throw new NotFoundException("Mothership not found");

	return motherShip;
};

export const getMotherShips = async (user: string) => {
	const motherShips = await MotherShip.find({ user: user }).lean();

	return motherShips;
};

export const addShipToMotherShip = async (motherShipId: string, numberOfShips: number) => {
	const motherShip = await MotherShip.findById(motherShipId);
	if (!motherShip) throw new NotFoundException("Mothership not found");

	const totalShips = await Ship.find({ motherShip: motherShipId }).countDocuments();
	if ((totalShips + numberOfShips) > 9)
		throw new BadRequestException(
			`You can only have a maximum of 9 ships. You currently have ${motherShip?.ships.length} ships`
		);

	const ships = [];

	for (let i = 0; i < numberOfShips; i++) {
		ships.push(createAShip(`ship${totalShips + 1}`, motherShip._id));
	}

	await Promise.all(ships);

	return;
};

export const removeShipFromMotherShip = async (motherShipId: string, shipId: string) => {
	const ship = await Ship.findOne({ mothership: motherShipId, _id: shipId });
	if (!ship) throw new NotFoundException("Ship not found");

	await Promise.all([Crew.deleteMany({ ship: shipId }), Ship.deleteOne({ _id: shipId })]);

	return;
};

export const getShipsUnderMotherShip = async (motherShipId: string) => {
	if (!(await MotherShip.exists({ _id: motherShipId }))) {
		throw new NotFoundException("Mothership not found");
	}

	const ships = await Ship.find({ mothership: motherShipId });
	if (!ships) throw new NotFoundException("Ship not found");

	return ships;
};
