const { DataTypes, Model } = require('sequelize');
const bcript = require('bcryptjs')
const sequelize = require('../database');

class User extends Model {}

User.init(
	{
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				notNull:{
					msg: "El nombre es requerido"
				},
				len:{
					args: [3,255],
					msg: "El campo nombre debe ser mayor a 3 caracteres"
				},
				notEmpty:{
					msg: "El nombre es requerido"
				},
				

			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique:{
				args: true,
				msg: "El nombre de usuario ya esta en uso"
			},
			validate:{
				isAlphanumeric:{
					msg: "El nombre de usuario no debe contener caracteres especiales"
				},
				notNull:{
					msg: "El nombre de usuario es obligatorio"
				},
				len:{
					args: [3,35],
					msg: "El nombre de usuario debe ser mayor a 3 caracteres"
				},
				notEmpty:{
					msg: "El nombre de usuario es obligatorio"
				},
				// isUnique: async(value)=>{
				// 	const verify = await User.findOne({
				// 		where: {
				// 			username: value
				// 		},
				// 	});
				// 	if (verify) {
				// 		throw new Error('El nombre de usuario ya esta en uso')
				// 	}
				// }

			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				args: true,
				msg: "El nombre de usuario ya esta en uso"
			},
			validate: {
				isEmail: {
					msg : "Debes escribir un email valido"
				},
				notNull:{
					msg: "El email es obligatorio"
				},
				len:{
					args: [5,255],
					msg: "Debes escribir un email valido"
				},
				notEmpty:{
					msg: "El Email  es obligatorio"
				},
				// isUnique: async(value)=>{
				// 	const verify = await User.findOne({
				// 		where: {
				// 			email: value
				// 		},
				// 	});
				// 	if (verify) {
				// 		throw new Error('El email ya esta en uso')
				// 	}
				// }
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			set(value){
				const salt = bcript.genSaltSync(10)
				hash = bcript.hashSync(value, salt)
				this.setDataValue('password', hash)
			},
			validate: {
				notNull:{
					msg: "El campo password es obligatorio"
				},
			}
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: "55555555",
			validate: {
				len: {
					args: [7,20],
					msg: "Se debe ingresar un numero de telefono valido"
				},
				isInt: {
					msg: "Debes ingresar solo numeros"
				}
			}
		},
		address: {
			type: DataTypes.STRING,
			defaultValue: 'Sin direccion de domicilio',
			allowNull: false,
			validate: {
				len:{
					args: [3,255],
					msg: "Debes ingresar un direccion valida"
				},
				notNull: {
					msg: "La direccion es requerida"
				}
			}
		},
		admin: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'users',
	},
);

module.exports = User;
