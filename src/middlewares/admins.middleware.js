const UsuarioModel = require('../models/usuario.model');

const checkAdmin = async (req, res, next) => {
  // Verificar si el usuario tiene el rol admin
  const [[user]] = req.user;
  const { id } = user;
  try {
    const [[usuario]] = await UsuarioModel.selectUsuarioById(id);
    if (!usuario || usuario.rol !== 'admin') {
      return res.json({
        fatal: 'El usuario no tiene asignado el rol de administrador',
      });
    }
    next();
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { checkAdmin };
