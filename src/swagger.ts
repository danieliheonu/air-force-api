export const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Travel Bay API",
			description:
				"A platform that allows people to book flights, hotels, cars and more.",
			version: "1.0.0",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
		],
		components: {
			seuritySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT",
				},
			},
		},
		security: [{
			bearerAuth: []
		}]
	},
	apis: ["./src/swagger/*.swagger.ts"],
};
