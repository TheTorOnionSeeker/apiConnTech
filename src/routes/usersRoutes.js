const { Router }=require('express');
const router=Router();
const {GetAll, createUser ,verifyUser, verifyToken,  getUserById}=require('../controllers/user.controllers.js');

router.get('/',GetAll);
router.get('/:id',getUserById);
router.get('/protected-resource', verifyToken);
router.post('/register',createUser);
router.post('/login',verifyUser);

module.exports = router;