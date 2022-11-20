import app from "../../app";
import request from "supertest";
import Ship from "../../models/ships.model";
import Crew from "../../models/crews.model";
import Mothership from "../../models/motherships.model";

describe("GET /api/v1/crews/:id", () => {
	test("return crew member", async () => {
		const { accessToken, user } = await global.signup();

		const motherShip = await Mothership.create({
			name: "test",
			user: user._id,
		});

		const ship = await Ship.create({
			name: "ship1",
			mothership: motherShip._id,
		});

		const crew = await Crew.create({
			name: "crew1",
			ship: ship._id,
		});

		const res = await request(app)
			.get(`/api/v1/crews/${crew._id}`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);

		expect(res.body.data.ship).toEqual(ship._id.toString());
	});
});

describe("POST /api/v1/crews", () => {
	test("add crew member", async () => {
		const { accessToken, user } = await global.signup();

		const motherShip = await Mothership.create({
			name: "test",
			user: user._id,
		});

		const ship = await Ship.create({
			name: "ship1",
			mothership: motherShip._id,
		});

		const res = await request(app)
			.post('/api/v1/crews')
			.set("authorization", `Bearer ${accessToken}`)
			.send({
                name: "crew1",
                shipId: ship._id
            })

		expect(res.statusCode).toEqual(201);
        expect(res.body.data.ship).toEqual(ship._id.toString());
        expect(res.body.data.name).toEqual("crew1");
	});

    test("add crew member to ship with 5 crew members", async () => {
        const { accessToken, user } = await global.signup();

        const motherShip = await Mothership.create({
            name: "test",
            user: user._id,
        });

        const ship = await Ship.create({
            name: "ship1",
            mothership: motherShip._id,
        });

        await Crew.insertMany([{name: "crew1", ship: ship._id}, {name: "crew2", ship: ship._id}, {name: "crew3", ship: ship._id}, {name: "crew4", ship: ship._id}, {name: "crew5", ship: ship._id}]);

        const res = await request(app).post('/api/v1/crews').set("authorization", `Bearer ${accessToken}`).send({
            name: "crew6",
            shipId: ship._id
        });

        expect(res.statusCode).toEqual(400);
    });
});
