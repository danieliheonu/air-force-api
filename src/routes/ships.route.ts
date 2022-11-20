import { Router } from "express";
import {
	retrieveAllCrewMembersUnderShip,
	transferCrewMemberToShip,
} from "../controllers/ships.controller";
import jwt from "../middleware/verifyToken";
import { validateTransfer } from "../validations/ship.validation";
const shipRouter = Router();

shipRouter.post("/", jwt, validateTransfer, transferCrewMemberToShip);
shipRouter.get("/:id/crews", jwt, retrieveAllCrewMembersUnderShip);

export default shipRouter;
