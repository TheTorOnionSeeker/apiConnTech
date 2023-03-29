const { Router }=require('express');
const router=Router();
const {sortGeneral} = require('../controllers/general.sort');

router.post('/', sortGeneral);

module.exports = router;