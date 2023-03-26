const { Router } = require('express');
const { createUser,
        verifyUser
        } = require('../controllers/user.controllers')
const {getSpecificVacant} = require('../controllers/vacant.controllers')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/user', verifyUser)
router.post('/user', createUser)
router.get('/dogs?name=:name_dog', getSpecificVacant);

module.exports = router;