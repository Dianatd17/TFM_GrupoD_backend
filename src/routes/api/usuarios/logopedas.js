const router = require('express').Router();

const LogopedasController = require('../../../controllers/logopedas.controller');

/*
			GET / (getAll. si es admin, muestra los que no están verificados también. si no, sólo los verificados)

			GET /:id (versión con los campos necesarios para mostrar a clientes/admins)

			GET /infancia (si infancia_o_adulto es infancia o ambos)

			GET /adultos (idem pero con adultos o ambos)

			GET /especialidad/:idespecialidad (todos los que tienen relación con id especialidad en especialidades_has_logopedas)

			POST /conectar/:idlogopeda (crea relación del id del token con logopeda, si es el cliente)
			
			PUT /conectar/:idcliente (cambia status del id del token con el cliente, si es el logopeda)
*/

module.exports = router;