const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {}

Category.init(
	{
		_name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				args: true,
				msg: "Ya existe una categoria con este nombre"
			},
			validate: {
				len: {
					args: [3,255],
					msg: "El nombre de la categoria debe tener almenos 3 caracteres"
				},
				notNull: {
					args: true,
					msg: "El nombre de la categoria es requerido"
				},

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
