const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {}

Category.init(
	{
		_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [3,255],
					msg: "El nombre de la categoria debe tener almenos 3 caracteres"
				}
			}
		}
	},
	{
		sequelize,
		modelName: 'Category',
		tableName: 'categories',
	},
);

module.exports = Category;
