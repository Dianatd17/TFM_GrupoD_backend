const router = require('express').Router();

const EspecialidadesController = require('../../controllers/especialidades.controller');

/* 			
        GET /
		GET /:id
		GET /infancia (es_infancia = 1)
		GET /adultos (es_infancia = 0)
		POST /logopeda/:idespec (crea relación con usuario del id del token con especialidad, si es logopeda)
		PUT /logopeda/:idespec
		DELETE /logopeda/:idespec
*/

module.exports = router;
