const router = require('express').Router();

const UsuariosController = require('../../../controllers/usuarios.controller');

/* 			
            GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)
		    PUT /:id (si rol = logopeda habrá que editar logopeda_datos también)
*/

module.exports = router;
