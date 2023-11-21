const router = require('express').Router();

router.use('/public', require('./api/public'));
router.use('/usuarios/register', require('./api/usuarios/register'));
router.use('/usuarios/login', require('./api/usuarios/login'));
router.use('/usuarios/logopedas', require('./api/usuarios/logopedas'));
router.use('/usuarios/clientes', require('./api/usuarios/clientes'));
router.use('/usuarios/admins', require('./api/usuarios/admins'));

module.exports = router;
