const userController = {};
const User = require('../models/user.model');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');

userController.login = async (req, res) => {
	const { email, password } = req.body;
	let user = null;

	try {
		user = await User.findOne({
			attributes: ['id', 'fullname', 'username', 'email', 'password'],
			where: { email },
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Process Falied',
			message: 'Ha ocurriod un error, intente más tarde',
		});
	}
	if (!user || !bcript.compareSync(password, user.password))
		return res.status(404).json({
			status: 404,
			auth: false,
			error: 'Bad Credential',
			message: 'Credenciales Inválidas',
		});

	const token = jwt.sign(
		{ auth_user: { id: user.id, email: user.email } },
		process.env.APP_KEY || 'fffffffffff',
		{
			expiresIn: '1h',
		},
	);

	res.json({
		status: 200,
		auth: true,
		message: 'ok',
		user: {
			id: user.id,
			email: user.email,
			fullname: user.fullname,
			username: user.username,
		},
		token,
	});
};

userController.resgister = (req, res) => {
	const { email, fullname, username, password } = req.body;
	try {
		User.create({
			fullname,
			username,
			email,
			password,
		})
			.then(user => {
				res.status(201).json({
					status: true,
					message: 'Resgistro completado',
					user,
				});
			})
			.catch(err => {
				res.status(400).json({
					status: false,
					error: {
						message: 'Verifica todos los campos',
						err,
					},
				});
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: 'Ocurrio un problema, vuelva a intentarlo',
			error: {
				message: 'Verifica todos los campos',
				err,
			},
		});
	}
};

userController.auth = async (req, res) => {
	const token = req.headers['authorization'];
	if (token) {
		try {
			const verify = jwt.verify(token, process.env.SECRET);
			if (verify) {
				res.status(200).json({
					status: true,
					message: 'Token validado correctamente',
					verify,
				});
			}
		} catch (err) {
			res.status(400).json({
				status: false,
				message: 'Token no invalido',
				err,
			});
		}
	} else {
		res.status(400).json({
			status: false,
			message: 'Token no proveido',
		});
	}
};

module.exports = userController;
