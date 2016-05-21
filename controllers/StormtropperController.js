'use strict';

let StormtropperModel = require('../models/StormtropperModel');

let StormtropperController = {
	create: function(request, response, next) {

	},
	list: function(request, response, next) {
		StormtropperModel.query({}, function(err, data) {
			if(err) {
				return response.status(500).json({ err: 'deu ruim'});
			}
			response.json(data)
		});
	},
	getById: function(request, response, next) {
		StormtropperModel.findOne({_id : request.params.id }, function(err, data) {
			if(err) {
				return response.status(500).json({ err: 'não consegui pegar por id'});
			}
			response.json(data)
		})
	},
	update: function(request, response, next) {

	},
	delete: function(request, response, next) {

	}
};

module.exports = StormtropperController;