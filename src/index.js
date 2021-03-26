const app = require('./app');
const sequelize = require('./database');
require('dotenv').config()

async function main() {
	await app.listen(app.get('PORT'));
	console.log(`${app.get('APPNAME')} Listening On Port ${app.get('PORT')}`);
	console.log(`http://localhost:${app.get('PORT')}`);
	try {
		await sequelize.sync({ force: false });
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

main();
