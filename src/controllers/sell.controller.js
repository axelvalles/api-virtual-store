const sellController = {}
const Sell = require('../models/sell.model')

sellController.findAll = async (req, res) => {
    try {
		const data = await Sell.findAll();
		res.json({
			status: 200,
			Sells: data,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
}

sellController.findOne = async (req, res) => {
    const {id} = req.params
    try {
        const data = await Sell.findByPk(id)
        if(data){
			res.json({
				status: 200,
				Sell: data,
			});
		}else{
			res.status(500).json({
				status: 500,
				message: "Venta no encontrada",
			});
		}

    } catch (error) {
        res.status(500).json({
			status: 500,
			message: error,
		});
    }
}

sellController.create = async (req, res) => {
	const { quantity, priceByUnit, userId, productId } = req.body;
	const total = quantity * priceByUnit
	try {
		const sell = await Sell.create({
			_quantity: quantity,
			_priceByUnit: priceByUnit,
			_total: total,
			_userId: userId,
			_productId: productId

		});
		res.status(201).json({
			status: 201,
			sell,
			message: 'Venta procesada con Exito',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: error,
		});
	}
}

sellController.destroy = async (req, res) => {
    const {id} = req.params
	try {	
		const sell = await Sell.destroy({
			where:{
				id
			}
		})
		if(sell){
			res.json({
				status: 200,
				sell,
				message: 'Venta eliminada con exito',
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


module.exports = sellController