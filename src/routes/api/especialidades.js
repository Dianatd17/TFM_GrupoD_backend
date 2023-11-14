//Definir todas las URLs para la gestión de la tabla de especialidades

const router = require('express').Router();

const EspecialidadController = require('../../controllers/especialidades.controller');

router.get('/', EspecialidadController.getAllEspecialidades);


module.exports = router;