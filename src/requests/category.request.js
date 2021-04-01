const categoryRequest = (req, res, next) => {
	const { name } = req.body;

	if (!name) {
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'El nombre es requerido',
		});
	}

	if (typeof name !== 'string')
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Nombre no válido',
		});

	next();
};

module.exports = categoryRequest;
