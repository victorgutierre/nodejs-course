'use strict';

let MainController = {
	middleware: function(request, response, next) {
		console.log('middleware');
		next();
	},
	home: function(request, response, next) {
		let json = {
			name: 'Victor',
			age: 19,
			workAt: 'Beleza Na Web',
			description: 'Front end Developer'
		};
		response.status(404);
		response.send(json);
	},
	create: function(request, response, next) {
		response.send('Create blahhhh')
	}
};

module.exports = MainController;