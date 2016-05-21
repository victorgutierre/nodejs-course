'use strict';

let MainController = {
	middleware: function(request, response, next) {
		console.log('middleware');
		next();
	},
	home: function(request, response, next) {
		response.sendFile(process.env.PWD + '/index.html');
	},
	create: function(request, response, next) {
		let body = request.body;

		console.log('name', body.name);
		response.send('Create blahhhh');
	}
};

module.exports = MainController;