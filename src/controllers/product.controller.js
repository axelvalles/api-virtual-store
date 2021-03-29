const Product = require('../models/product.model')
const productMethods = {};

productMethods.getAll = async (req, res) => {
	try {
		const data = await Product.findAll();
		res.json({
			status: 200,
			categories: data,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
};

productMethods.create = async (req, res) => {
	const { name, description, image, price, stock, categoryID } = req.body;

	try {
		const product = await Product.create({
			_name: name,
			_description: description,
			_price: price,
			_stock: stock,
			_image : image,
			_cateforyID: categoryID

		});

		res.status(201).json({
			status: 201,
			product,
			message: 'Producto creado con Exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
}

module.exports = productMethods;
