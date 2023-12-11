const router = require('express').Router();
const { checkToken } = require('../middlewares/auth.middleware');

router.use('/public', require('./api/public'));
router.use('/enviaremail', require('./api/enviarEmail'));
router.use('/usuarios', require('./api/usuarios'));
router.use('/especialidades', require('./api/especialidades'));

module.exports = router;
