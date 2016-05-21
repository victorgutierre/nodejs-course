'use strict';

let router = require('express').Router();

router.get('/', function(request, response) {
	response.send('blah');
});

module.exports = router;