const Product = require('../product.model');
const Category = require('../category.model');
const User = require('../user.model');
const Sell = require('../sell.model');
const Image = require('../image.model')


Category.hasMany(Product, {
	foreignKey: 'category_id',
	onDelete: 'set null',
	onUpdate: 'cascade',
});
Product.belongsTo(Category, {
	foreignKey: 'category_id',
	onDelete: 'set null',
	onUpdate: 'cascade',
});

Product.hasOne(Image, {
	foreignKey: 'product_id',
	onDelete: 'cascade',
	onUpdate: 'cascade',
});
Image.belongsTo(Product, {
	foreignKey: 'product_id',
	onDelete: 'cascade',
	onUpdate: 'cascade',
});


User.hasMany(Sell, {
	foreignKey: 'user_id',
	onDelete: 'set null',
	onUpdate: 'cascade',
});

Sell.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'set null',
	onUpdate: 'cascade',
});

Product.belongsToMany(Sell, {
	through: 'product_shell',
	foreignKey: 'product_id',
});

Sell.belongsToMany(Product, {
	through: 'product_shell',
	foreignKey: 'shell_id',
});
