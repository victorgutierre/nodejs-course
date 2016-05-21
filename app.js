'use strict';

// Pedindo pra usar o express com require
let express = require('express');
let app 		= express();

app.use('/', require('./routes'));

// Sobe o servidor
app.listen(3000);