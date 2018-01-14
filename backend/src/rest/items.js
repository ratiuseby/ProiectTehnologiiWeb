var express = require('express');
var router = express.Router();
var items = require('../service/').items;



router.get('/', items.list);
router.post('/', items.create);
router.get('/:id', items.findById);
router.get('/delete/:id', items.delete);
router.put('/:id', items.update);

module.exports = router;