'use strict';

let router = require('express').Router();
let MainController = require('../controllers/MainController');
let pkg = require('../package.json');
let jwt = require('jwt-simple');
let moment = require('moment');
let config = require('config');

router.post('/login', function(request, response, next) {
	let username = request.body.username;
	let password = request.body.password;

	if(username === 'rebels' && password === '1138') { // Consultar no mongo e tirar hardcode
		let expires = moment().add(7, 'days').valueOf();
		let token = jwt.encode({ 
			user: username,
			exp: expires
		}, config.get('jwtTokenSecret'));
		response.json({
			token: token
		})
	} else {
		let err = new Error('Não foi possivel logar.');
		err.status = 401;
		next(err);
	}
});

// Chama os objetos do MainController
router.use('/', MainController.middleware);
// router.get('/', MainController.home);
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
