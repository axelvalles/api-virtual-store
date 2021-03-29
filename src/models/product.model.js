const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const {Sequelize} = require('sequelize')

class Product extends Model {}

Product.init(
	{
		_name: {
			type: DataTypes.STRING,
			unique: {
				args: true,
				msg: "Ya exite una categoria con este nombre"
			},
			allowNull: false,
			validate: {
				len: {
					args: [3,255],
					msg: "El nombre de la categoria debe tener almenos 3 caracteres"
				},
				notNull: {
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
				notNull: {
					msg: "LA descripcion de la categoria es requerida"
				}
			}
        },
        _code:{
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
			allowNull: false
        },
        _price:{
            type: DataTypes.FLOAT,
			defaultValue: 0,
			allowNull: false
        },
        _stock:{
            type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
        },
        _image:{
            type: DataTypes.STRING,
			defaultValue: 'Not image',
			allowNull: false
        }


	},
	{
		sequelize,
		modelName: 'Product',
		tableName: 'products',
	},
);

module.exports = Product;
