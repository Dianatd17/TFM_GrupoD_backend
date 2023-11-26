const router = require('express').Router();

const NotificacionesController = require('../../controllers/notificaciones.controller');

router.get('/', NotificacionesController.getNotificaciones);
router.post('/', NotificacionesController.postNotificaciones);
router.put('/', NotificacionesController.putNotificaciones);
router.delete('/', NotificacionesController.deleteNotificaciones);

module.exports = router;
