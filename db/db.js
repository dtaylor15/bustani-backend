import Sequelize from "sequelize";
import PlantModel from "./Plant.js";
import plantSeed from "./plantSeed.json" with {type: "json"};
const db = new Sequelize(`postgres://localhost:5432/bustani`, {
	logging: false,
});

const Plant = PlantModel(db);

const connectToDB = async () => {
	try {
		await db.authenticate();
		console.log("DB connected");

		db.sync();

        const existingBooks = await Plant.findAll();
        if (!existingBooks.length===0){
            for (const plantData of plantSeed){
                await Plant.create(plantData)
            }
        
        }
	} catch (err) {
		console.error(err);
		console.error("DB failure");
	}
};

connectToDB();
export { db, Plant };
