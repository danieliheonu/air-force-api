import userRouter from "./user.route";
import motherShipRouter from "./motherships.route";
import shipRouter from "./ships.route";
import crewRouter from "./crews.route";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "../swagger";
import { Router } from "express";

const route = Router();

const specs = swaggerJSDoc(options);

route.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
route.use("/", userRouter);
route.use("/motherships", motherShipRouter);
route.use("/ships", shipRouter);
route.use("/crews", crewRouter);

export default route;
