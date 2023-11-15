const router = require('express').Router();

router.use('/admins', require('./usuarios/admins'));
router.use('/logins', require('./usuarios/logins'));
router.use('/logopedas', require('./usuarios/logopedas'));
router.use('/pacientes', require('./usuarios/pacientes'));
router.use('/registers', require('./usuarios/registers'));



module.exports = router;