// run this in terminal npm i -g netlify-cli

import { DataTypes } from "sequelize";

export const PlantModel = (db) => {
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

export const PlantData = [
	{
		plantName: "Basil",
		sciName: "Ocimum basilicum",
		size: "Small",
		description: "edible",
		waterLvl: "Moderate",
		lightLvl: "Direct sunlight",
	},
	{
		plantName: "Snake Plant",
		sciName: "Sansevieria trifasciata",
		size: "Medium",
		description: "succulent",
		waterLvl: "Low",
		lightLvl: "Low to bright indirect light",
	},
	{
		plantName: "Peace Lily",
		sciName: "Spathiphyllum",
		size: "Medium to Large",
		description: "flower",
		waterLvl: "High",
		lightLvl: "Low to medium indirect light",
	},
	{
		plantName: "Pothos",
		sciName: "Epipremnum aureum",
		size: "Medium",
		description: "leafy",
		waterLvl: "Moderate",
		lightLvl: "Low to bright indirect light",
	},
	{
		plantName: "ZZ Plant",
		sciName: "Zamioculcas zamiifolia",
		size: "Small to Medium",
		description: "succulent",
		waterLvl: "Low",
		lightLvl: "Low to bright indirect light",
	},
];

export default PlantModel;
