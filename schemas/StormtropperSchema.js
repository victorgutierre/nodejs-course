'use strict';

let mongoose = require('../db/mongoose');

let StormtropperSchema = mongoose.model('Stormtropper', {
	name: String,
	alias: String,
	divisions: [String],
	patent: String
});

module.exports = StormtropperSchema;