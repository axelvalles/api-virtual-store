const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Sell extends Model {}

Sell.init(
	{
		_numberSell: {
			type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue: 1,
			autoIncrementIdentity: true
		},
        _total: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                isNegative(value){
					if(value < 0){
						throw new Error('Total no debe ser menor a cero');
					}
				}
            }
        },
        _quantity:{
            type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue: 1,
            validate: {
                isNegative(value){
					if(value < 0){
						throw new Error('Cantidad no debe ser menor a cero');
					}
				}
            }
        },
        _priceByUnit: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate:{
                isNegative(value){
					if(value < 0){
						throw new Error('El precio unitario no debe ser menor a cero');
					}
				}
            }
        }
	},
	{
		sequelize,
		modelName: 'Sell',
		tableName: 'sells',
	},
);



module.exports = Sell;
