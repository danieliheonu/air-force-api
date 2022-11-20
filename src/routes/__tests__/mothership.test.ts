import app from "../../app";
import request from "supertest";
import MotherShip from "../../models/motherships.model";
import Ship from "../../models/ships.model";

describe("GET /motherships", () => {
	test("return all the motherships created by the user", async () => {
		const { accessToken, user } = await global.signup();
		await MotherShip.create({ name: "test", user: user._id });

		const res = await request(app)
			.get("/api/v1/motherships")
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);
		expect(res.body.data.length).toEqual(1);
		expect(res.body.data[0].name).toEqual("test");
	});
});

describe("POST /api/v1/motherships", () => {
	test("create a mothership", async () => {
		const { accessToken } = await global.signup();
		const res = await request(app)
			.post("/api/v1/motherships")
			.set("authorization", `Bearer ${accessToken}`)
			.send({
				name: "test",
			})
			.expect(201);

		expect(res.body.data.name).toEqual("test");
	});

	test("return 400 if name is not provided", async () => {
		const { accessToken } = await global.signup();
		await request(app)
			.post("/api/v1/motherships")
			.set("authorization", `Bearer ${accessToken}`)
			.send({})
			.expect(400);
	});
});

describe("GET /api/v1/motherships/:id", () => {
	test("return a mothership", async () => {
		const { accessToken, user } = await global.signup();
		const mothership = await MotherShip.create({
			name: "test",
			user: user._id,
		});
		const res = await request(app)
			.get(`/api/v1/motherships/${mothership._id}`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);

		expect(res.body.data.name).toEqual("test");
		expect(res.body.data._id).toEqual(mothership._id.toString());
	});

	test("return 404 if mothership is not found", async () => {
		const { accessToken } = await global.signup();
		await request(app)
			.get(`/api/v1/motherships/5f5e5d5c5b5a595857565554`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(404);
	});
});

describe("POST /api/v1/motherships/:id/ships", () => {
	test("return all ships in the mothership", async () => {
		const { accessToken, user } = await global.signup();
		const mothership = await MotherShip.create({
			name: "test",
			user: user._id,
		});

		const res = await request(app)
			.get(`/api/v1/motherships/${mothership._id}/ships`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);

		expect(res.body.data.length).toEqual(0);
	});
});

describe("POST /api/v1/motherships/:id", () => {
	test("add ship to mothership", async () => {
		const { accessToken, user } = await global.signup();
		const mothership = await MotherShip.create({
			name: "test",
			user: user._id,
		});

		const res = await request(app)
			.post(`/api/v1/motherships/${mothership._id}`)
			.set("authorization", `Bearer ${accessToken}`)
			.send({
				ships: 4,
			});
		
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual("Ship added to mothership successfully");
		const ships = await Ship.find({ mothership: mothership._id })
		expect(ships.length).toEqual(4);
	});

	test("return 400 if number of ships is a string and not number", async () => {
		const { accessToken, user } = await global.signup();
		const mothership = await MotherShip.create({
			name: "test",
			user: user._id,
		});

		const res = await request(app)
			.post(`/api/v1/motherships/${mothership._id}`)
			.set("authorization", `Bearer ${accessToken}`)
			.send({
				ships: "4",
			});

		expect(res.statusCode).toEqual(400);
	});
});

describe("DELETE /api/v1/motherships/:id", () => {
	test("delete a mothership", async () => {
		const { accessToken, user } = await global.signup();
		const mothership = await MotherShip.create({
			name: "test",
			user: user._id,
		});
		
		const ship = await Ship.create({
			name: "ship",
			mothership: mothership._id,
		})
		
		await request(app)
			.delete(`/api/v1/motherships/${mothership._id}/ships/${ship._id}`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);
	});
});
