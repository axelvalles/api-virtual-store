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
			message: error,
		});
	}
};

categoryController.findOne = async (req, res) => {
	const {id} = req.params
	try {
		const data = await Category.findByPk(id)
		if(data){
			res.json({
				status: 200,
				categories: data,
			});
		}else{
			res.status(500).json({
				status: 500,
				message: "Categoria no encontrada",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: 500,
			message: error,
		});

	}
}

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
			message: error,
		});
	}
};

categoryController.update = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const category = await Category.update({ _name: name }, { where: { id } });
		if(category[0] != 0){
			res.json({
				status: 200,
				category,
				message: 'Categoria actulizada con exito',
			});
		}else{
			res.json({
				status: 500,
				category,
				message: 'Id invalido',
			});
		}
		
	} catch (error) {
		res.json({
			status: 500,
			message: 'Ocurrio un error vuelve a intentarlo',
			error
		});
	}
};


categoryController.destroy = async (req, res) => {
	const {id} = req.params
	try {	
		const category = await Category.destroy({
			where:{
				id
			}
		})
		if(category){
			res.json({
				status: 200,
				category,
				message: 'Categoria eliminada con exito',
			});
		}
		else{
			res.json({
				status: 500,
				message: 'Id invalido',
			});
		}
	} catch (error) {
		console.log(error);
		res.json({
			status: 500,
			message: 'Ocurrio un error vuelve a intentarlo',
			error
		});
	}
}

module.exports = categoryController;
