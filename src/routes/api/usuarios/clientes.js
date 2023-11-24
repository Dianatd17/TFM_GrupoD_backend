const router = require('express').Router();

const ClientesController = require('../../../controllers/clientes.controller');

router.get('/clientes', (req, res) => {}); // Solo para admins
router.get('/clientes/:id', (req, res) => {}); // (versión con los campos necesarios para mostrar a logopedas/admins)
router.get('/clientes/bylogopeda/:idlogopeda', (req, res) => {}); // (todos los clientes de ese logopeda)

module.exports = router;
