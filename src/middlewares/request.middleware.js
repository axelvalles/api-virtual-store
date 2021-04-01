const requestJson = (req, res, next) => {
	if (req.method !== 'GET') {
		if (req.headers['content-type'] !== 'application/json' && !req.is('json'))
			return res.status(401).json({
				status: 401,
				error: 'UNAUTHORIZED',
				message: 'Request Invalid',
			});
		next();
	}

	if (req.headers['content-type'] !== 'application/json')
		return res.status(401).json({
			status: 401,
			error: 'UNAUTHORIZED',
			message: 'Request Invalid',
		});
	next();
};

module.exports = requestJson;
