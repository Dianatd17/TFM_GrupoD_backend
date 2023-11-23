const router = require('express').Router();

const ClientesController = require('../../../controllers/clientes.controller');

/* 			
            GET / (sólo para admins)
			GET /:id (versión con los campos necesarios para mostrar a logopedas/admins)
			GET /bylogopeda/:idlogopeda (todos los clientes de ese logopeda)
*/

module.exports = router;
