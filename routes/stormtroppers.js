'use strict';

let router = require('express').Router();
let StormtropperController = require('../controllers/StormtropperController');

router.get('/', StormtropperController.list);
router.get('/:id', StormtropperController.getById);
router.post('/', StormtropperController.create);
router.put('/:id', StormtropperController.update);
router.delete('/:id', StormtropperController.delete);

module.exports = router;