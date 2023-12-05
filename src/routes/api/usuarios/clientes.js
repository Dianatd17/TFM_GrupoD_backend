const router = require('express').Router();

const ClientesController = require('../../../controllers/clientes.controller');

router.get('/', ClientesController.getAllClientes); // Solo para admins
router.get('/:id', ClientesController.getClienteById); // (versión con los campos necesarios para mostrar a logopedas/admins)
router.get('/bylogopeda/:idCliente', ClientesController.getClientesByLogopeda); // (todos los clientes de ese logopeda)

/* HACER UN GET LOGOPEDAS BY CLIENTES */

module.exports = router;
