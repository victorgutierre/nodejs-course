'use strict';

let MainController = {
	home: function(request, response, next) {
		response.send('Estou dentro do Controller');
	},
	create: function(request, response, next) {
		response.send('Create blahhhh')
	},
	middleware: function(request, response, next) {
		console.log('middleware');
		next();
	}
};

module.exports = MainController;