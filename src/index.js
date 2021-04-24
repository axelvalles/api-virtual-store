const app = require('./app');
const sequelize = require('./database');
require('dotenv').config()

async function main() {
	await app.listen(app.get('PORT'));
	console.log(`http://localhost:${app.get('PORT')}`);
	try {
		if (process.env.APP_ENV === 'production')
			await sequelize.sync({ force: false });
		await sequelize.sync({ force: false});
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

main();
