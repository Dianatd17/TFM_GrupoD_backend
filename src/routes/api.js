const router = require('express').Router();
const { checkToken } = require('../middlewares/auth.middleware');

router.use('/public', require('./api/public'));
router.use('/usuarios', /*checkToken,*/ require('./api/usuarios'));
router.use('/especialidades', require('./api/especialidades'));
router.use('/notificaciones', require('./api/notificaciones'));

module.exports = router;
