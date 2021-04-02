const Product = require('../product.model');
const Category = require('../category.model');
const User = require('../user.model');
const Sell = require('../sell.model');
const SellHeader = require('../sellHeader.model');

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Sell, {
	as: 'user',
	foreignKey: {
		name: '_userId',
		allowNull: false,
	},
});
Sell.belongsTo(User);

Product.hasMany(Sell, {
	as: 'product',
	foreignKey: {
		name: '_productId',
		allowNull: false,
	},
});
Sell.belongsTo(Product);
