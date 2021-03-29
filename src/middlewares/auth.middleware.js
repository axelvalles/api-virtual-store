const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
	if (token) {
		try {
			const verify = jwt.verify(token, process.env.SECRET);
			if (verify) {
				next()
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
}


module.exports = auth