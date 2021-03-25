const userMethods = {};
const User = require('../models/user.model');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/user.routes');

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
				const verify = bcript.compare(password, user.password);
				if (verify) {
					const token = jwt.sign(user.id, 'secret');
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
		if (email && fullname && username && password) {
			const verifyemail = await User.findOne({
				where: {
					email,
				},
			});
			if (verifyemail) {
				return res.status(400).json({
					status: false,
					message: 'El email ya estan en uso',
				});
			}
			const verifyuser = await User.findOne({
				where: {
					username,
				},
			});
			if (verifyuser) {
				return res.status(400).json({
					status: false,
					message: 'El nombre de usuario ya estan en uso',
				});
			}

			const salt = await bcript.genSalt(10);
			const passwordhashed = await bcript.hash(password, salt);
			User.create({
				fullname,
				username,
				email,
				password: passwordhashed,
			})
				.then(user => {
					res.status(201).json({
						status: true,
						message: 'Resgistro completado',
						user,
					});
				})
				.catch(e => {
					console.log(e);
					res.status(500).json({
						status: false,
						message: 'Ocurrio un error, vuelva a intentarlo',
					});
				});
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

userMethods.auth = async (req, res) => {
	const user = await User.findAll({
		where: {
			email: 'brandon@gmail.co',
		},
	});
	if (user) {
		res.status(201).json({
			status: true,
			message: 'usuario encontrado',
			user,
		});
	} else {
		res.status(400).json({
			status: false,
			message: 'Usuario no existe',
		});
	}
};

module.exports = userMethods;
