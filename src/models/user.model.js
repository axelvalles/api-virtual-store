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
					msg: "El campo nombre es obligatorio"
				},
				len:{
					args: [3,255],
					msg: "El campo nombre debe ser mayor a 3 caracteres"
				},
				notEmpty:{
					args: true,
					msg: "El nombre es requerido"
				}

			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate:{
				isAlphanumeric:{
					args: true,
					msg: "El nombre de usuario no debe contener caracteres especiales"
				},
				notNull:{
					args: true,
					msg: "El nombre de usuario es obligatorio"
				},
				len:{
					args: [3,35],
					msg: "El nombre de usuario debe ser mayor a 3 caracteres"
				},
				notEmpty:{
					args: true,
					msg: "El nombre de usuario es obligatorio"
				},
				isUnique: async(value)=>{
					const verify = await User.findOne({
						where: {
							username: value
						},
					});
					if (verify) {
						throw new Error('El nombre de usuario ya esta en uso')
					}
				}

			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique:true,
			validate: {
				isEmail: {
					args: true,
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
					args: true,
					msg: "El Email  es obligatorio"
				},
				isUnique: async(value)=>{
					const verify = await User.findOne({
						where: {
							email: value
						},
					});
					if (verify) {
						throw new Error('El email ya esta en uso')
					}
				}
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
			type: DataTypes.STRING,
			defaultValue: "0000000",
			validate: {
				len: {
					args: [7,20],
					msg: "Se debe ingresar un numero de telefono valido"
				}
			}
		},
		address: {
			type: DataTypes.STRING,
			defaultValue: 'Sin direccion de domicilio',
			validate: {
				len:{
					args: [3,255],
					msg: "Debes ingresar un direccion valida"
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
