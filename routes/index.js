var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


router.get('/', indexController.index)
router.get('/painel', indexController.painel)
router.get('/painel-search',indexController.painelSearch)
router.get('/painel-add', indexController.painelAdd)
router.post('/addpet', indexController.addPet)
module.exports = router;
