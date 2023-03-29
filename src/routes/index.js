const {Router}=require('express');
const router=Router();
const vacantsRouter=require('./vacantsRoutes');
const usersRouter = require('./usersRoutes');
const sortRouter = require('./sortRoutes');

router.use('/vacant', vacantsRouter);
router.use('/user', usersRouter);
router.use('/sort', sortRouter);

module.exports = router;