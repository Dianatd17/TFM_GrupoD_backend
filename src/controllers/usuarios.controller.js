const UsuarioModel = require('../models/usuario.model');

const getAllUsuarios = async (req, res) => {
  // Petición de prueba
  try {
    const [result] = await UsuarioModel.selectAllUsuarios();
    res.json(result);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    res.send('Devolvemos el usuario del id recibido');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const editUserById = async (req, res) => {
  try {
    res.send('Editamos el usuario cuyo id es recibido');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    res.send('Se registra el usuario');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    res.send('Se efectúa login del usuario');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = {
  getAllUsuarios,
  getUserById,
  editUserById,
  registerUser,
  loginUser,
};
