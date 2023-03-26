const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);

module.exports = router;