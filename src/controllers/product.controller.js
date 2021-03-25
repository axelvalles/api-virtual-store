const productMethods = {};

productMethods.getAll = (req, res) => {
	res.send('list from controller products');
};

module.exports = productMethods;
