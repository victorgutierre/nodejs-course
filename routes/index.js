'use strict';

let router = require('express').Router();
let MainController = require('../controllers/MainController');
let pkg = require('../package.json');


// Chama os objetos do MainController
router.use('/', MainController.middleware);
router.get('/', MainController.home);
router.post('/', MainController.create);

router.get('/health', function(request, response) {
	response.json({
		version: pkg.version,
    pid: process.pid,
    memory: process.memoryUsage(),
    uptime: process.uptime(),
    env: process.env.NODE_ENV
	});
})

router.use('/api', require('./api'));

module.exports = router;
