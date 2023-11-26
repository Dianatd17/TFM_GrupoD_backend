const router = require('express').Router();

const ClientesController = require('../../../controllers/clientes.controller');

router.get('/clientes', ClientesController.getClientes); // Solo para admins
router.get('/clientes/:id', ClientesController.getClienteById); // (versión con los campos necesarios para mostrar a logopedas/admins)
router.get(
  '/clientes/bylogopeda/:idlogopeda',
  ClientesController.getClientesByLogopeda
); // (todos los clientes de ese logopeda)

module.exports = router;
