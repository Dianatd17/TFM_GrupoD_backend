const router = require('express').Router();
const { checkToken } = require('../../../middlewares/auth.middleware')
const { checkAdmin } =  require('../../../middlewares/admins.middleware');

const AdminsController = require('../../../controllers/admins.controller');

router.put('/verificar/:usuarioId', checkToken, checkAdmin, AdminsController.putVerificarUsuario); // (si es admin)
router.put('/rechazar/:usuarioId', checkToken, checkAdmin, AdminsController.putRechazarUsuario); // (si es admin)
router.put('/desactivar/:usuarioId', checkToken, checkAdmin, AdminsController.putDesactivarUsuario); // (si es admin)

module.exports = router;
