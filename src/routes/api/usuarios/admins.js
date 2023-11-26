const router = require('express').Router();

const AdminsController = require('../../../controllers/admins.controller');

router.put('/verificar/:idlogopeda', AdminsController.putVerificarIdlogopeda); // (si es admin)
router.put('/verificar/:idcliente', AdminsController.putVerificarIdcliente); // (si es admin)

module.exports = router;
