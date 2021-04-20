const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Image extends Model {}

Image.init(
	{
		_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        _originalname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        _path: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        _mimetype: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        _size: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
        
	},
	{
		sequelize,
		modelName: 'Image',
		tableName: 'images',
	},
);



module.exports = Image;
