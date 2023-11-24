const router = require('express').Router();

router.use('/public', require('./api/public'));
router.use('/usuarios', require('./api/usuarios'));
router.use('/especialidades', require('./api/especialidades'));
router.use('/notificaciones', require('./api/notificaciones'));

module.exports = router;
