const Product = require('../models/product.model');
const Category = require('../models/category.model');
const Image = require('../models/image.model');
const sequelize = require('../database');
const productController = {};

productController.findAll = async (req, res) => {
	try {
		const data = await Product.findAll({
			where: {
				_status: true,
			},
			include: [
				{
					model: Category,
				},
				{
					model: Image,
				},
			],
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
		const data = await Product.findByPk(id, {
			include: [
				{
					model: Category,
				},
				{
					model: Image,
				},
			],
		});
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
	const { name, description, price, stock, category_id } = req.body;

	const t = await sequelize.transaction();
	try {
		let product = await Product.create({
			_name: name,
			_description: description,
			_price: price,
			_stock: stock,
			category_id,
		});
		await Image.create({
			product_id: product.id,
			_name: req.file.filename,
			_originalname: req.file.originalname,
			_path: req.file.path,
			_mimetype: req.file.mimetype,
			_size: req.file.size,
		});

		await t.commit();
		res.json({
			status: 200,
			message: 'Producto creado con exito',
			product,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
};

productController.update = async (req, res) => {
	const { id } = req.params;
	const { name, description, price, stock } = req.body;
	
	try {
		const product = await Product.update(
			{
				_name: name,
				_description: description,
				_price: price,
				_stock: stock
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
			include: {
				model: Image,
			},
			where: {
				id,
			},
		});

		if (product){
			res.json({
				status: 200,
				product,
				message: 'Producto eliminado con exito',
			});
	}
	} catch (error) {
		res.json({
			status: 500,
			error: 'Process Falied',
			message: { error },
		});
	}
};

module.exports = productController;
