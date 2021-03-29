const Product = require('../models/product.model')
const productMethods = {};

productMethods.getAll = async (req, res) => {
	try {
		const data = await Product.findAll();
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

productMethods.getOne = async (req, res) => {
	const {id} = req.params
	try {
		const data = await Product.findOne({
			where:{
				id
			}
		})
		if(data){
			res.json({
				status: 200,
				categories: data,
			});
		}else{
			res.status(500).json({
				status: 500,
				message: "Producto no encontrado",
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

productMethods.create = async (req, res) => {
	const { name, description, image, price, stock, categoryId } = req.body;

	try {
		Product.create({
			_name: name,
			_description: description,
			_price: price,
			_stock: stock,
			_image : image,
			_categoryId: categoryId
		})
		.then(product => {
			res.status(201).json({
				status: true,
				message: 'Producto creado con exito',
				product
			});
		})
		.catch(err => {
			console.log(err)
			res.status(400).json({
				status: false,
				error:{
					message:"Error vuelve a intentarlo",
					err
				}
			});
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
}

productMethods.update = async (req,res) => {
	const { id } = req.params;
	const { name, description, image, price, stock } = req.body;
	try {
		const product = await Product.update({ 
			_name: name,
			_description: description,
			_price: price,
			_stock: stock,
			_image : image,
		},{ 
			where: { id } 
		});
		if(product[0] != 0){
			res.json({
				status: 200,
				product,
				message: 'Producto actulizado con exito',
			});
		}else{
			res.json({
				status: 500,
				message: 'id invalido',
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

productMethods.destroy = async (req, res) => {
	const {id} = req.params
	try {	
		const product = await Product.destroy({
			where:{
				id
			}
		})
		if(product){
			res.json({
				status: 200,
				product,
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

module.exports = productMethods;
