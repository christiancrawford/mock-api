const { exec } = require("child_process");

const runMockedServer = () => {
	exec("graphql-faker schema.graphql", (error) => {
		console.log("process.cwd(", process.cwd());
		if (error) {
			console.error(error);
		}
	});
};

runMockedServer();

// /home/user/bin/*
