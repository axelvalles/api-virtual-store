const userRequest = (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Todos los campos son requeridos',
		});

	next();
};

module.exports = userRequest;
