import Sequelize from "sequelize";
import { PlantModel, PlantData } from "./Plant.js";

let db;
if (process.env.DATABASE_URL === undefined) {
	console.log("Connected locally");
	db = new Sequelize("postgres://localhost:5432/bustani", {
		logging: false,
	});
} else {
	db = new Sequelize(process.env.DATABASE_URL, {
		logging: false,
	});
}

// const db = new Sequelize(`postgres://localhost:5432/bustani`, {
// 	logging: false,
// });

const Plant = PlantModel(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("DB connected");

		await db.sync();

		const existingPlants = await Plant.findAll();
		if (existingPlants.length === 0) {
			for (const plantData of PlantData) {
				await Plant.create(plantData);
			}
		}
	} catch (err) {
		console.error(err);
		console.error("DB failure");
	}
};
(async () => {
	await connectToDB();
})();

export { db, Plant };
