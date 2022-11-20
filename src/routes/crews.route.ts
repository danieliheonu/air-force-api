import { Router } from "express";
import { 
    createCrewMember, 
    getCrewMember 
} from "../controllers/crews.controller";
import jwt from "../middleware/verifyToken";
import { validateCreationOfCrewMember } from "../validations/crew.validation";
const crewRouter = Router();

crewRouter.post("/", jwt, validateCreationOfCrewMember, createCrewMember);
crewRouter.get("/:id", jwt, getCrewMember);

export default crewRouter;
