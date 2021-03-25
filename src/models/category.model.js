const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {}

Category.init(
	{
		_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// createdAt: {
		// 	type: DataTypes.DATE,
		// 	allowNull: true,
		// 	defaultValue: Date.now(),
		// },
		// updatedAt: {
		// 	type: DataTypes.DATE,
		// 	allowNull: true,
		// 	defaultValue: Date.now(),
		// },
	},
	{
		sequelize,
		modelName: 'Category',
		tableName: 'categories',
	},
);

module.exports = Category;
