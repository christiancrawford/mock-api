const { generate } = require("@graphql-codegen/cli");

const generateSchema = async () => {
	await generate(
		{
			schema: "https://api.stage.healthwarehouse.com/graphql",
			documents: "./src/**/*.graphql",
			// Add Headers if needed
			// headers: {
			// 	Authorization: "Bearer XXXXX",
			// },
			generates: {
				[process.cwd() + "/models/types.d.ts"]: {
					plugins: ["typescript"],
				},
			},
		},
		true
	);
};

generateSchema();
