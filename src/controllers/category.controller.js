const Category = require('../models/category.model');
const categoryController = {};
categoryController.getAll = async (req, res) => {
	try {
		const data = await Category.findAll();
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

categoryController.save = async (req, res) => {
	const { name } = req.body;

	try {
		const category = await Category.create({
			_name: name,
		});

		res.status(201).json({
			status: 201,
			category: category,
			message: 'Categoria Creada con Exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
};

categoryController.update = async (req, res) => {
	const {id} = req.params
	const {name} = req.body

	const category = await Category.update({_name:name}, {where: {id}})

	res.json({
		status: 200,
		category,
		message: 'Categoria actulizada con exito'
	})
	/*try {
		const category = await Category.create({
			_name: name,
		});
	
		res.status(201).json({
			status: 201,
			category: category,
			message: 'Categoria Creada con Exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	} */
};

module.exports = categoryController;
