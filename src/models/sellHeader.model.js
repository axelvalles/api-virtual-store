/*
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class SellHeader extends Model {}

SellHeader.init(
	{
		_numberSell: {
			type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue: 1,
            autoIncrementIdentity: true,
			primaryKey: true
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
        _quantityOfProducts:{
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
	},
	{
		sequelize,
		modelName: 'SellHeader',
		tableName: 'sellsHeaders',
	},
);



module.exports = SellHeader;
*/