import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../app";
import request from "supertest";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import { UserDocument } from "../models/user.model";

let mongo: MongoMemoryServer;

// jest.setTimeout(20000);

declare global {
	var signup: () => Promise<{user: UserDocument; accessToken: string}>;
}

beforeAll(async () => {
	mongo = await MongoMemoryServer.create();
	const uri = mongo.getUri();

	await mongoose.connect(uri);
});

beforeEach(async () => {
	const collections = await mongoose.connection.db.collections();

	for (const collection of collections) {
		collection.deleteMany({});
	}
});

afterAll(async () => {
	await mongoose.connection.close();
	await mongo.stop();
});

global.signup = async () => {
	const user = await User.create({ email: "test@test.com", password: "password" });
	const accessToken = jwt.sign({ _id:  user._id}, process.env.JWT_SECRET!);

	return {accessToken, user};
};
