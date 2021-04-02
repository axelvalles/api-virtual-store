const sellController = {};
const Sell = require('../models/sell.model');

sellController.findAll = async (req, res) => {
	try {
		const data = await Sell.findAll();
		res.json({
			status: 200,
			sells: data,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: { error },
		});
	}
};

sellController.findOne = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await Sell.findByPk(id);
		if (data)
			return res.json({
				status: 200,
				sell: data,
			});

		res.status(404).json({
			status: 404,
			error: 'Resource Not Found',
			message: ' Venta no encontrada',
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: { error },
		});
	}
};

sellController.create = async (req, res) => {
	const { quantity, priceByUnit, userId, productId } = req.body;
	const total = quantity * priceByUnit;
	try {
		const sell = await Sell.create({
			_quantity: quantity,
			_priceByUnit: priceByUnit,
			_total: total,
			_userId: userId,
			_productId: productId,
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
};

sellController.destroy = async (req, res) => {
	const { id } = req.params;
	try {
		const sell = await Sell.destroy({
			where: {
				id,
			},
		});

		if (sell)
			return res.json({
				status: 200,
				message: 'Venta Eliminada con Exito',
			});

		res.status(404).json({
			status: 404,
			error: 'Resource Not Found',
			message: { error },
		});
	} catch (error) {
		res.json({
			status: 500,
			error: 'Process Falied',
			message: { error },
		});
	}
};

module.exports = sellController;
