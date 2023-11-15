//Definir todas las URLs para la gestión de la tabla de logopedas
const router = require('express').Router();

const LogopedaController = require('../../controllers/logopedas.controller');

router.get('/', LogopedaController.getAllLogopedas);//ruta /api/logopedas que devuelve todos los logopedas


module.exports = router;