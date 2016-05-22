'use strict';

let db = require('../db/mongoose');
let schema = require('../schemas/StormtropperSchema');

let StormtropperModel = {
	query: function(query, callback) {
		schema.find(query).exec(callback);
		// db.collection('stormtroppers').find(query, callback);
	},
	findOne: function(query, callback) {
		schema.findOne(query).exec(callback);
		// db.collection('stormtroppers').findOne(query, callback);
	},
	create: function(data, callback) {
		let obj = new schema(data);
		obj.save(callback);
		// db.collection('stormtroppers').insert(data, callback);
	},
	update: function(query, data, callback) {
		schema.update(query, {$set: data}).exec(callback);
		// db.collection('stormtroppers').update(query, {$set: data}, callback);
	},
	delete: function(query, callback) {
		schema.remove(query).exec(callback);
		// db.collection('stormtroppers').remove(query, callback);
	}
};

module.exports = StormtropperModel;