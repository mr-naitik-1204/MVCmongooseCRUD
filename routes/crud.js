var express = require('express');
var router = express.Router();
const HC = require('../controler/crude.js');


router.get('/', HC.get); 
router.post('/create', HC.create);
router.get('/delete', HC.delete);
router.get('/updete', HC.updete);

module.exports = router;
