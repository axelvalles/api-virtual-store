const Product = require('../models/product.model');
const Category = require('../models/category.model');
const productController = {};

productController.findAll = async (req, res) => {
	try {
		const data = await Product.findAll({
			include: {
				model: Category,
			},
		});
		res.json({
			status: 200,
			Products: data,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
};

productController.findOne = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Product.findByPk(id);
		if (data)
			return res.json({
				status: 200,
				categories: data,
			});

		res.status(404).json({
			status: 404,
			error: 'Resource Not Found',
			message: 'Producto no encontrado',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
};

productController.create = async (req, res) => {
	const { name, description, code, image, price, stock, categoryId } = req.body;

	Product.create({
		_name: name,
		_description: description,
		_code: code,
		_price: price,
		_stock: stock,
		_image: image,
		_categoryId: categoryId,
	})
		.then(product => {
			res.status(201).json({
				status: 201,
				message: 'Producto creado con exito',
				product: product,
			});
		})
		.catch(err => {
			res.status(500).json({
				status: 500,
				error: 'Process Falied',
				message: {
					info: 'Error vuelve a intentarlo',
					err,
				},
			});
		});
};

productController.update = async (req, res) => {
	const { id } = req.params;
	const { name, description, image, price, stock, code } = req.body;
	try {
		const product = await Product.update(
			{
				_name: name,
				_description: description,
				_price: price,
				_stock: stock,
				_image: image,
				_code: code,
			},
			{
				where: { id },
			},
		);
		if (product[0])
			return res.json({
				status: 200,
				message: 'Producto actulizado con exito',
			});

		res.json({
			status: 404,
			error: 'Resource Not Found',
			message: 'Producto no Encontrado',
		});
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			error: 'Process Falied',
			message: {
				error,
			},
		});
	}
};

productController.destroy = async (req, res) => {
	const { id } = req.params;
	try {
		const product = await Product.destroy({
			where: {
				id,
			},
		});
		if (product)
			return res.json({
				status: 200,
				product,
				message: 'Categoria eliminada con exito',
			});

		res.json({
			status: 404,
			error: 'Resource Not Found',
			message: 'Producto no Encontrado',
		});
	} catch (error) {
		res.json({
			status: 500,
			error: 'Process Falied',
			message: { error },
		});
	}
};

module.exports = productController;
