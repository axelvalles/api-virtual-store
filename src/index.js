const app = require('./app');
const sequelize = require('./database');

<<<<<<< HEAD
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
=======
app.listen(app.get('PORT'), () => {
	console.log(`${app.get('APPNAME')} Listening On Port`, app.get('PORT'));
});
>>>>>>> 9e3d73938ae8e74fe0573c300ca4a981843a9934
