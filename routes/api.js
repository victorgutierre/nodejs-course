'use strict';

let router = require('express').Router();

router.get('/', function(request, response) {
	response.send('blah');
});

router.use('/stormtroppers', require('./stormtroppers'));

module.exports = router;