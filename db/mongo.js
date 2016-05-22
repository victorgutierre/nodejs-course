'use strict';

let mongojs = require('mongojs');
let config  = require('config');
let debug = require('debug')('curso_node:db:mongo');

let host = config.get('mongo.host');
let port = config.get('mongo.port');
let database = config.get('mongo.database');

let connection = `${host}:${port}/${database}`;  
debug('connection', connection);
let db = mongojs(connection);

db.on('connect', function() {
	console.log('Conectado ao banco');
});

db.on('error', function() {
	console.log('Não conectou ao banco');
});

module.exports = db;