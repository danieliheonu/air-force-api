import { Router } from "express";
import {
	createMotherShip,
	retrieveMotherShip,
	retrieveAllMotherShips,
	addShipToMotherShip,
	removeShipFromMotherShip,
	retrieveAllShipsUnderMotherShip,
} from "../controllers/motherships.controller";
import jwt from "../middleware/verifyToken";
import { validateCreateMothership, validateAddShip } from "../validations/mothership.validation";
const motherShipRouter = Router();

motherShipRouter.post("/", jwt, validateCreateMothership, createMotherShip);
motherShipRouter.get("/", jwt, retrieveAllMotherShips);
motherShipRouter.get("/:id", jwt, retrieveMotherShip);
motherShipRouter.post("/:id", jwt, validateAddShip, addShipToMotherShip);
motherShipRouter.get("/:id/ships", jwt, retrieveAllShipsUnderMotherShip);
motherShipRouter.delete("/:mothershipId/ships/:shipId", jwt, removeShipFromMotherShip);

export default motherShipRouter;
