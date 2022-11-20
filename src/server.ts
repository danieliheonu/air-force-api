import "dotenv/config";
import app from "./app";
import mongoose, { ConnectOptions } from "mongoose";

mongoose.connect(
	process.env.MONGO_URI as string,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions
);

app.listen(process.env.PORT || 5000, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});

