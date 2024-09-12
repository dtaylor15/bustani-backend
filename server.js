import express from "express";
import cors from "cors";
import { db } from "./db/db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.send({ server: "running" });
});

server.get("/plants", async (req, res) => {
	res.send({ plants: await Plant.findAll() });
});

server.listen(30001, () => {
	console.log("server is running");
});
