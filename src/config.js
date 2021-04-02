module.exports = {
	database: {
		host: process.env.DB_HOST || 'locahost',
		username: process.env.DB_USER || 'root',
		database: process.env.DB_NAME || 'sequelize',
		password: process.env.DB_PASSWORD || '',
	},
};
