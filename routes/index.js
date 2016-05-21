'use strict';

let router = require('express').Router();
let MainController = require('../controllers/MainController')

// Chama os objetos do MainController
router.use('/', MainController.middleware);
router.get('/', MainController.home);
router.post('/', MainController.create);

module.exports = router;
