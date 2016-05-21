'use strict';

let bluebird = require('bluebird');
let StormtropperModel = bluebird.promisifyAll(require('../models/StormtropperModel'));

let StormtropperController = {
	create: function(request, response, next) {
		let body = request.body;

		StormtropperModel.createAsync(body)
			.then(function(data) {
				response.status(201).json(data);
			})
			.catch(next);
	},

	list: function(request, response, next) {
		let query = {};

		if(request.query.name) {
			query.name = RegExp(request.query.name);
		}

		StormtropperModel.queryAsync(query)
			.then(function(data) {
				response.json(data);
			})
			.catch(next);
	},

	getById: function(request, response, next) {
		StormtropperModel.findOne({_id : request.params.id }, function(err, data) {
			if(err) {
				return next(err);
			}
			response.json(data)
		})
	},

	update: function(request, response, next) {
		let query = {
			_id: request.params.id
		};
		let body = request.body;

		StormtropperModel.update(query, body, function(err, data) {
			if(err) {
				return next(err);
			}
			response.json(data);
		})
	},

	delete: function(request, response, next) {
		let query = {
			_id: request.params.id
		};

		StormtropperModel.delete(query, function(err, data){
			response.status(204).json(data)
		});
	}
};

module.exports = StormtropperController;