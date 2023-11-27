const NotificacionModel = require('../models/notificacion.model');

const getNotificaciones = async (req, res) => {
  try {
    res.send('Respuesta get notificaciones');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const postNotificaciones = async (req, res) => {
  try {
    res.send('Respuesta post notificaciones');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putNotificaciones = async (req, res) => {
  try {
    res.send('Respuesta put notificaciones');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const deleteNotificaciones = async (req, res) => {
  try {
    res.send('Respuesta delete notificaciones');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = {
  getNotificaciones,
  postNotificaciones,
  putNotificaciones,
  deleteNotificaciones,
};
