const NotificacionModel = require('../models/notificacion.model');

const getAllNotificaciones = async (req, res) => {
    try {
        const [result] = await NotificacionModel.selectAllNotificaciones();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllNotificaciones };