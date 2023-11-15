const router = require('express').Router();

const NotificacionController = require('../../controllers/notificaciones.controller');

router.get('/', NotificacionController.getAllNotificaciones);



module.exports = router;