const AdminModel = require('../models/admin.model');

const putVerificarUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const [result] = await AdminModel.updateStatus(usuarioId, 1);
    console.log(result);
    if (!result) {
      res.json({ fatal: "No se ha podido actualizar el estado" })
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const putRechazarUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const [result] = await AdminModel.updateStatus(usuarioId, -1);
    console.log(result);
    if (!result) {
      res.json({ fatal: "No se ha podido actualizar el estado" })
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const putDesactivarUsuario = async (req, res) => {
  try {
    const { usuarioId } = req.params;
    const [result] = await AdminModel.updateStatus(usuarioId, 0);
    if (!result) {
      res.json({ fatal: "No se ha podido actualizar el estado" })
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { putVerificarUsuario, putRechazarUsuario, putDesactivarUsuario };
