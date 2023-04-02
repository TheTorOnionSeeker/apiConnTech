const { Router }=require('express');
const router=Router();
const {GetAll, createUser ,verifyUser, getUserById, createUserExternal}=require('../controllers/user.controllers.js');

router.get('/',GetAll);
router.get('/:id',getUserById);
router.post('/register',createUser);
router.post('/login',verifyUser);
router.post('/registerExternal',createUserExternal);

module.exports = router;