const userMethods = {};
const User = require('../models/user.model');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');

userMethods.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (email && password) {
			const user = await User.findOne({
				where: {
					email,
				},
			});
			if (user) {
				const verify = await bcript.compare(password, user.password);
				if (verify) {
					const token = jwt.sign(user.id + '|' + user.username, process.env.SECRET);
					res.status(200).json({
						status: true,
						message: 'Ingreso al sistema',
						token,
					});
				} else {
					res.status(400).json({
						status: false,
						message: 'Contraseña invalida',
					});
				}
			} else {
				res.status(400).json({
					status: false,
					message: 'Usuario no existe compruebe sus datos',
				});
			}
		} else {
			res.status(400).json({
				status: false,
				message: 'Campos obligatorios requeridos',
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			status: false,
			message: 'Ocurrio un error, vuelva a intentarlo',
		});
	}
};

userMethods.resgister = async (req, res) => {
	const { email, fullname, username, password } = req.body;
	try {
		if (password.length < 6) {
			return res.status(400).json({
				status: false,
				message: 'El campo password debe ser mayor o igual a 6 caracteres',
			});
		}
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
					err,
				});
			});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			status: false,
			message: 'Ocurrio un problema, vuelva a intentarlo',
			err,
		});
	}
};

userMethods.auth = async (req, res) => {
	const token = req.headers['authorization'];
	if (token) {
		try {
			const verify = jwt.verify(token, process.env.SECRET);
			if (verify) {
				res.status(200).json({
					status: true,
					message: 'Token validado correctamente',
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

module.exports = userMethods;
