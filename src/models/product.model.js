const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const {Sequelize} = require('sequelize')

class Product extends Model {}

Product.init(
	{
		_name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				len: {
					args: [3,255],
					msg: "El nombre de la categoria debe tener almenos 3 caracteres"
				},
				notEmpty: {
					args: true,
					msg: "El nombre de la categoria es requerido"
				},
				notNull: {
					args: true,
					msg: "El nombre de la categoria es requerido"
				}
			}
		},
        _description:{
            type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [3,255],
					msg: "Descripcion de la categoria debe tener almenos 3 caracteres"
				},
				notEmpty: {
					args: true,
					msg: "La descripcion de la categoria es requerida"
				},
				notNull: {
					args: true,
					msg: "LA descripcion de la categoria es requerida"
				}
			}
        },
        _code:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        _price:{
            type: DataTypes.FLOAT,
			defaultValue: 0
        },
        _stock:{
            type: DataTypes.INTEGER,
			defaultValue: 0
        },
        _image:{
            type: DataTypes.STRING,
			defaultValue: 'Not image'
        }


	},
	{
		sequelize,
		modelName: 'Product',
		tableName: 'products',
	},
);

module.exports = Product;
