const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
	const token = req.headers['authorization'];

	if (!token) {
		return res.status(401).json({
			status: 401,
			error: 'UNAUTORAIZED',
			message: 'No has provisto un token',
		});
	}

	try {
		jwt.verify(token, process.env.SECRET);
	} catch (error) {
		return res.status(401).json({
			status: 401,
			error: 'UNAUTORAIZED',
			message: {
				error,
			},
		});
	}

	next();
};

module.exports = auth;
