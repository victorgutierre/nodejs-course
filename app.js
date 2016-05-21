'use strict';

// Pedindo pra usar o express com require
let express = require('express');
let app 		= express();
let MainController = require('./controllers/MainController');

// Chama os objetos no MainController
app.use('/', MainController.middleware);
app.get('/', MainController.home);
app.post('/', MainController.create);

// Sobe o servidor
app.listen(3000);