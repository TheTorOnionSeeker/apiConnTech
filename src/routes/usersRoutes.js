const { Router }=require('express');
const router=Router();
const {GetAll, createUser ,verifyUser, getUserById, modifyUser, verifyToken }=require('../controllers/user.controllers.js');

router.get('/',GetAll);
router.get('/:id',getUserById);
router.get('/protected-resource', verifyToken);
router.post('/register',createUser);
router.post('/login',verifyUser);
router.post('/modifyuser',modifyUser)

module.exports = router;