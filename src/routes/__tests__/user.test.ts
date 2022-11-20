import app from "../../app";
import User from "../../models/user.model";
import request from "supertest";

describe("POST /register", () => {
	test("user can register with email and password", async () => {
		const res = await request(app).post("/api/v1/register").send({
			email: "email@email.com",
			password: "password",
		});
		expect(res.statusCode).toBe(201);
		expect(res.body.message).toEqual("User created successfully");

		const user = await User.findOne({ email: "email@email.com" });
		expect(user).not.toBeNull();
	});

	test("user cannot register with only email or password", async () => {
		const credentials = [{ email: "email@email.com" }, { password: "password" }, {}];
		for (let credential of credentials) {
			const res = await request(app).post("/api/v1/register").send({
				email: "email@email.com",
			});
			expect(res.statusCode).toBe(400);
		}
	});
});

describe("POST /login", () => {
	test("user can login with email and password", async () => {
		await User.create({ email: "email@email.com", password: "password" });
		const res = await request(app).post("/api/v1/login").send({
			email: "email@email.com",
			password: "password",
		});
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual("Login Successful");
	});

	test("user cannot login with only email or password", async () => {
		const credentials = [{ email: "email@email.com" }, { password: "password" }, {}];
		for (let credential of credentials) {
			const res = await request(app).post("/api/v1/login").send({
				credential,
			});
			expect(res.statusCode).toBe(400);
		}
	});

	test("non existing user can't login", async () => {
		const res = await request(app).post("/api/v1/login").send({
			email: "email@email.com",
			password: "password",
		});
		expect(res.statusCode).toBe(404);
	});
});
