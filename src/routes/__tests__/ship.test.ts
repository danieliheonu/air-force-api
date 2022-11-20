import app from "../../app";
import request from "supertest";
import MotherShip from "../../models/motherships.model";
import mothershipsModel from "../../models/motherships.model";
import Ship from "../../models/ships.model";
import Crew from "../../models/crews.model";

describe("GET /api/v1/:id/crews", () => {
	test("return all crew memebers", async () => {
		const { accessToken, user } = await global.signup();
		const motherShip = await mothershipsModel.create({
			name: "test",
			user: user._id,
		});

		const ship = await Ship.create({
			name: "ship1",
			mothership: motherShip._id,
		});

		await Crew.create({
			name: "crew1",
			ship: ship._id,
		});

		const res = await request(app)
			.get(`/api/v1/ships/${ship._id}/crews`)
			.set("authorization", `Bearer ${accessToken}`)
			.expect(200);

        expect(res.body.data.length).toEqual(1);
	});
});

describe('POST /api/v1/ships', () => {
    test('transfer crew member', async () => {
        const { accessToken, user } = await global.signup();
		const motherShip = await mothershipsModel.create({
			name: "test",
			user: user._id,
		});

		const ship1 = await Ship.create({
			name: "ship1",
			mothership: motherShip._id,
		});

		const ship2 = await Ship.create({
			name: "ship2",
			mothership: motherShip._id,
		});

		const crew1 = await Crew.create({
			name: "crew1",
			ship: ship1._id,
		});

		await Crew.create({
			name: "crew2",
			ship: ship2._id,
		});

        const res = await request(app).post('/api/v1/ships').set('authorization', `Bearer ${accessToken}`).send({
            toShip: ship2._id,
            fromShip: ship1._id,
            crewMemberId: crew1._id
        })

        expect(res.status).toEqual(200);
        const crew = await Crew.findById(crew1._id);
        expect(crew?.ship).toEqual(ship2._id);
    })
})
