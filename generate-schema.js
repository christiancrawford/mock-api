const { generate } = require("@graphql-codegen/cli");

const generateSchema = async () => {
	await generate(
		{
			schema: "https://api.stage.healthwarehouse.com/graphql",
			// Add Headers if needed
			// headers: {
			// 	Authorization: "Bearer XXXXX",
			// },
			generates: {
				[`${process.cwd()}/schema.graphql`]: {
					plugins: ["schema-ast"],
					config: {
						includeDirectives: true,
						federation: true,
					},
				},
			},
		},
		true
	);
};

generateSchema();
