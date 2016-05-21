'use strict';

let mongojs = require('mongojs');

let db = mongojs('localhost:27017/curso-nodejs');

db.on('connect', function() {
	console.log('Conectado ao banco');
});

db.on('error', function() {
	console.log('Não conectou ao banco');
});

module.exports = db;