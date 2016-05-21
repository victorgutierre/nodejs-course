'use strict';

let db = require('../db/mongo');

let StormtropperModel = {
	query: function(query, callback) {
		db.collection('stormtroppers').find(query, callback);
	},
	create: function(data, callback) {

	},
	update: function(data, query, callback) {

	},
	delete: function(query, callback) {

	}
};

module.exports = StormtropperModel;