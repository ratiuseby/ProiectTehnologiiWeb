var express = require('express');
var router = express.Router();
var invoices = require('../service/').invoices;

router.get('/', invoices.list);
router.get('/:id', invoices.findById);
router.get('/delete/:id', invoices.delete);
router.post('/', invoices.create);
router.put('/:id', invoices.update);

module.exports = router;