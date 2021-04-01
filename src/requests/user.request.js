const userRequestLogin = (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Todos los campos son requeridos',
		});

	if (password.length < 6) {
		res.status(400).json({
			error: 'Bad Request',
			status: 400,
			message: 'Contraseña debe tener al menos 6 caracteres',
		});
	}

	if (typeof password !== 'string') {
		res.status(400).json({
			error: 'Bad Request',
			status: 400,
			message: 'La contraseña debe ser un string',
		});
	}

	next();
};

const userRequestRegister = (req, res, next) => {
	const { email, fullname, username, password, phone, address } = req.body;

	if (!email || !fullname || !username || !password || !phone || !address)
		res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Existen campos requeridos sin rellenar',
		});

	if (password.length < 6) {
		res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Contraseña debe tener al menos 6 caracteres',
		});
	}
	if (typeof password !== 'string') {
		res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'La contraseña debe ser un string',
		});
	}

	next();
};

module.exports = { userRequestLogin, userRequestRegister };
