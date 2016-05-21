'use strict';

// Pedindo pra usar o express com require
let express = require('express');
let app 		= express();
let bodyParser = require('body-parser');


app.use(bodyParser());

app.use('/', require('./routes'));
app.use(function(request, response, next) {
	response.status(404);
	response.send('Ops! Não encontrei');
});

app.use(function(err, request, response, next) {
	console.log('Erro! ->', err);
	response.status(err.status || 500);
	response.send('Deu ruim...');
});

module.exports = app;