'use strict';

let router = require('express').Router();
let StormtropperController = require('../controllers/StormtropperController');

let jwt = require('jwt-simple');
let config = require('config');
let moment = require('moment');


router.use(function(request, response, next) {
	let token = request.query.token || request.headers['x-token'];

	if(!token) {
		let err = new Error('Sem autorização');
		err.status = 401;
		return next(err);
	}

	try {
	 	let decode = jwt.decode(token, config.get('jwtTokenSecret'));
	 	let isExpired = moment(decode.exp).isBefore(new Date());

	 	if(isExpired) {
	 		let err = new Error('Forbidden');
	 		err.status = 403;
	 		next(err);
	 	} else {
	 		request.use = decode.user;
	 		next();
	 	}
	 } catch(e) {
	 	next(e);
	 } 
});

router.get('/', StormtropperController.list);
router.get('/:id', StormtropperController.getById);
router.post('/', StormtropperController.create);
router.put('/:id', StormtropperController.update);
router.delete('/:id', StormtropperController.delete);

module.exports = router;