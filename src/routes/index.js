const {Router}=require('express');
const router=Router();
const vacantesRouter=require('./vacantesRoutes');

router.use('/vacantes', vacantesRouter);

module.exports = router;