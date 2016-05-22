'use strict';

let mongoose = require('mongoose');
let config = require('config');
let debug = require('debug')('curso_node:db:mongoose');
let host = config.get('mongo.host');
let port = config.get('mongo.port');
let database = config.get('mongo.database');

mongoose.connect(`${host}:${port}/${database}`);
let db = mongoose.connection;

db.on('error', function(err) {
	debug('err', err) 
});

module.exports = mongoose;