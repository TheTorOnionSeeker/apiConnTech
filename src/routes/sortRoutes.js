const { Router }=require('express');
const router=Router();
const {sortGeneral, sortRole} = require('../controllers/general.sort');

router.post('/', sortGeneral);
router.post('/role', sortRole);

module.exports = router;