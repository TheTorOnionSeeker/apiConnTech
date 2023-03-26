const { Router }=require('express');
const router=Router();
const {GetAll, createUser ,verifyUser, getUserById}=require('../controllers/user.controllers.js');

router.get('/',GetAll);
router.get('/:id',getUserById);
router.post('/register',createUser);
router.post('/login',verifyUser)

module.exports = router;