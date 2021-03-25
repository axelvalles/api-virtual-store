const app = require('./app');

app.listen(app.get('PORT'), () => {
	console.log(`${app.get('APPNAME')} Listening On Port`, app.get('PORT'));
});
