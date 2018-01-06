var express = require('express');
var router = express.Router();
var users = require('../service/').users;

router.get('/', users.list);
router.get('/:id', users.findById);
router.get('/delete/:id', users.delete);
router.post('/', users.create);
router.put('/:id', users.update);

module.exports = router;