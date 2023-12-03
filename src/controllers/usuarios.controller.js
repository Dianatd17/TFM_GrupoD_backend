const UsuarioModel = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const { createToken } = require('../helpers/utils');

const getAllUsuarios = async (req, res) => {
  try {
    const [result] = await UsuarioModel.selectAllUsuarios();
    res.json(result);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const [usuario] = await UsuarioModel.selectUsuarioById(id);
    res.json(usuario[0]);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const [usuario] = await UsuarioModel.selectUsuarioByEmail(req.body.email);
    res.json(usuario[0]);
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
    const { email } = req.body;
    // ¿Existe el email en la base de datos?
    const emailcheck = await UsuarioModel.selectUsuarioByEmail(email);
    if (emailcheck[0].length > 0) {
        return res.json({ fatal: 'Ya existe cuenta para esa dirección de email' });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const [result] = await UsuarioModel.insertUsuario({
      nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, 
      password: req.body.password, rol: req.body.rol, direccion: req.body.direccion, 
      localidad: req.body.localidad, provincia: req.body.provincia, status: req.body.status
    });
    if (req.body.rol === 'logopeda') {
      const [result2] = await UsuarioModel.insertDatosLogopeda(
        {usuario_id: result.insertId, telefono: req.body.telefono, infancia_o_adulto: req.body.infancia_o_adulto}
      );
    } 
    const [usuario] = await UsuarioModel.selectUsuarioByEmail(req.body.email);
    res.json(usuario[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // ¿Existe el email en la base de datos?
    const result = await UsuarioModel.selectUsuarioByEmail(email);
    // devuelve null si no existe
    if (result[0].length === 0) {
        // forzamos el return para ahorrarnos if-else
        return res.json({ fatal: 'Error en email y/o password' });
    }
    // ¿Coincide la password de la BD con la del body?
    const user = result[0];
    const equals = bcrypt.compareSync(password, user[0].password);
    if (!equals) {
        return res.json({ fatal: 'Error en email y/o password' });
    }
    res.json({ success: 'Login correcto!', token: createToken(user[0]) });
  } catch(error) {
    res.json({ fatal: error.message});
  }
};

module.exports = {
  getAllUsuarios,
  getUserById,
  getUserByEmail,
  editUserById,
  registerUser,
  loginUser,
};
