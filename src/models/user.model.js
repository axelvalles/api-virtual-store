const { DataTypes, Model } = require('sequelize');
const  sequelize  = require('../database');

class User extends Model {}

User.init(
	{
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			defaultValue: 'not phone provide'
		},
		address: {
			type: DataTypes.STRING,
			defaultValue: 'not address provide'
		}

	},
	{
		sequelize,
		modelName: 'User',
	},
);

module.exports = User

