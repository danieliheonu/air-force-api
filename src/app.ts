import "dotenv/config";
import express from "express";
import cors from "cors";
import route from "./routes";
import exceptionHandler from "./middleware/exceptionFilter";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Travel Bay server is up and running! 🚀");
});
app.use("/api/v1", route);
app.use(exceptionHandler);

export default app;
