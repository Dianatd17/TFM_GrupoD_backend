const router = require('express').Router();

const AdminsController = require('../../../controllers/admins.controller');

router.put('/verificar/:idlogopeda', (req, res) => {}); // (si es admin)
router.put('/verificar/:idcliente', (req, res) => {}); // (si es admin)

module.exports = router;
