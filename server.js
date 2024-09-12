import express from "express";
import cors from "cors";
import { db, Plant } from "./db/db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.send({ server: "running" });
});

server.get("/plants", async (req, res) => {
	try {
		const plants = await Plant.findAll();
		res.send({ plants });
	} catch (error) {
		console.error("Error fetching plants:", error);
		res.status(500).send({ error: "Failed to fetch" });
	}
});

server.listen(3001, "0.0.0.0", async () => {
	try {
		await db.authenticate();
		console.log("DB connected");
		console.log("Server is running on http://localhost:3001");
	} catch (error) {
		console.error("Failed to connect to the DB:", error);
	}
});
