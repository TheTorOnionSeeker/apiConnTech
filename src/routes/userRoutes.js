const { Router }=require('express');
const router=Router();
const {GetAll,createUser}=require('../controllers/user.controllers.js');

router.get('/',GetAll);
router.post('/new',createUser);

module.exports = router;