'use strict';

let router = require('express').Router();
let StormtropperController = require('../controllers/StormtropperController');

router.get('/', StormtropperCotnroller.list);
router.get('/:id', StormtropperCotnroller.getById);
router.post('/', StormtropperCotnroller.create);
router.put('/:id', StormtropperCotnroller.update);
router.delete('/:id', StormtropperCotnroller.delete);

module.exports = router;