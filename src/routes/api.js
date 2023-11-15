const router = require('express').Router();

router.use('/especialidades', require('./api/especialidades'));
router.use('/logopedasList', require('./api/logopedasList'));
router.use('/notificaciones', require('./api/notificaciones'));
router.use('/pacientes', require('./api/pacientes'));



module.exports = router;