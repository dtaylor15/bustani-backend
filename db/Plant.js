import { DataTypes } from "sequelize";

const PlantModel = (db) => {
	return db.define("plant", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		plantName: DataTypes.STRING,
		sciName: DataTypes.STRING,
		size: DataTypes.STRING,
		description: DataTypes.STRING,
		waterLvl: DataTypes.STRING,
		lightLvl: DataTypes.STRING,
	});
};

export default PlantModel;
