'use strict';

let db = require('../db/mongo');

let StormtropperModel = {
	query: function(query, callback) {
		db.collection('stormtroppers').find(query, callback);
	},
	findOne: function(query, callback) {
		if(query._id) {
			query._id = db.ObjectId(query._id);
		}
		db.collection('stormtroppers').findOne(query, callback);
	},
	create: function(data, callback) {
		
	},
	update: function(data, query, callback) {

	},
	delete: function(query, callback) {

	}
};

module.exports = StormtropperModel;