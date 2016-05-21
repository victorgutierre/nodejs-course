'use strict';

let StormtropperController = {
	create: function(request, response, next) {

	},
	list: function(request, response, next) {
		response.send('blah');
	},
	getById: function(request, response, next) {
		let params = request.params;
		let query  = request.query;
		response.json({ params: params , query: query})
	},
	update: function(request, response, next) {

	},
	delete: function(request, response, next) {

	}
};

module.exports = StormtropperController;