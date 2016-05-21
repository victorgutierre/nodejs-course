'use strict';

let bluebird = require('bluebird');
let StormtropperModel = bluebird.promisifyAll(require('../models/StormtropperModel'));

function _handleNotFound(data) {
	let isNotFound = Array.isArray(data) ? !data.length : !data;
	if (isNotFound) {
		let err = new Error('not found');
		err.status = 404;
		throw err;
	}
	return data;
}


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
			.then(_handleNotFound)
			.then(function(data) {
				response.json(data);
			})
			.catch(next);
	},

	getById: function(request, response, next) {
		StormtropperModel.findOneAsync({_id : request.params.id })
			.then(_handleNotFound)
			.then(function(data) {
				response.json(data);
			})
			.catch(next);
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