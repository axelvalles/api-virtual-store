const Category = require('../models/category.model');
const categoryController = {};

categoryController.findAll = async (req, res) => {
	try {
		const data = await Category.findAll();
		res.json({
			status: 200,
			categories: data,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: {
				error,
			},
		});
	}
};

categoryController.findOne = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Category.findByPk(id);
		if (!data)
			return res.status(404).json({
				status: 404,
				error: 'Resource Not Found',
				message: 'Categoria no Encontrada',
			});

		res.json({
			status: 200,
			categories: data,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: {
				error,
			},
		});
	}
};

categoryController.create = async (req, res) => {
	const { name } = req.body;

	try {
		const category = await Category.create({
			_name: name,
		});
		res.status(201).json({
			status: 201,
			category,
			message: 'Categoria Creada con Exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: {
				error,
			},
		});
	}
};

categoryController.update = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const category = await Category.update({ _name: name }, { where: { id } });
		if (category[0] === 0)
			return res.status(400).json({
				status: 400,
				error: 'Bad Request',
				message: 'Categoria Inválida',
			});

		res.json({
			status: 200,
			message: 'Categoria actulizada con exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: {
				error,
			},
		});
	}
};

categoryController.destroy = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.destroy({
			where: {
				id,
			},
		});
		if (!category)
			return res.status(400).json({
				status: 400,
				error: 'Bad Request',
				message: 'Categoria Inválida',
			});

		res.json({
			status: 200,
			message: 'Categoria Eliminada',
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

module.exports = categoryController;
