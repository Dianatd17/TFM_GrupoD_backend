const UsuarioModel = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const { createToken, getGeolocation } = require('../helpers/utils');

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
    // TODO: revisar con middle que el id en token es el mismo que en el body, o si es rol admin
    const coord = await getGeolocation(req.body.direccion, req.body.localidad, req.body.provincia);
    [req.body.latitud, req.body.longitud] = coord;
    const [result] = await UsuarioModel.updateUsuario({ id: req.body.id,
      nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, 
      direccion: req.body.direccion, localidad: req.body.localidad, provincia: req.body.provincia,
      longitud: req.body.longitud, latitud: req.body.latitud
    });
    if (req.body.rol === 'logopeda') {
      const [result2] = await UsuarioModel.updatetDatosLogopeda({
        usuario_id: req.body.id, telefono: req.body.telefono, precio: req.body.precio, 
        experiencia: req.body.experiencia, descripcion: req.body.descripcion, 
        infancia_o_adulto: req.body.infancia_o_adulto
      });
    }
    if (req.body.password !== '') {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const [respass] = await UsuarioModel.updatePassword(req.body.id, req.body.password);
    }
    const [usuario] = await UsuarioModel.selectUsuarioById(req.body.id);
    res.json(usuario[0]);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getImagen = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await UsuarioModel.selectImagen(id);
    imagen = result[0].imagen || '';
    ruta = '';
    if (imagen !== '' && imagen !== null) {
      ruta = 'http://localhost:3000/img/';
    }
    res.json({ imagen: `${ruta}${imagen}` });
  } catch (error) {
    res.json({ error: error.message });
  }
}

const editImagen = async (req, res) => {
  /*try {
    if (req.file) {
      const [[user]] = req.user;
      const [result] = await UsuarioModel.updateImagen(user.id, req.file.filename);
      if(result && user.imagen !== null && user.image !== '') {
        fs.unlinkSync(`uploads/${user.imagen}`);
      }
      res.json({ ruta: req.file.filename });
    } else {
      res.json({ fatal: "No hay imagen que subir" });
    }
  } catch (error) {
    res.json({ Error: error.message });
  }*/
  // Antes de guardar el producto en la base de datos, modificamos la imagen para situarla donde nos interesa
  const extension = '.' + req.file.mimetype.split('/')[1];
  // Obtengo el nombre de la nueva imagen
  const newName = req.file.filename + extension;
  // Obtengo la ruta donde estará, adjuntándole la extensión
  const newPath = req.file.path + extension;
  // Muevo la imagen para que resiba la extensión
  fs.renameSync(req.file.path, newPath);
  // Modifico el BODY para poder incluir el nombre de la imagen en la BD
  req.body.imagen = newName;
  try {
      const [[user]] = req.user;
      const [response] = await UsuarioModel.updateImagen(user.id, req.body.imagen);
      if(response && user.imagen !== null && user.image !== '') {
        fs.unlinkSync(`uploads/${user.imagen}`);
      }
      res.json({ ruta: req.body.imagen });
  } catch (err) {
      res.json(err);
  }
}

const registerUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const coord = await getGeolocation(req.body.direccion, req.body.localidad, req.body.provincia);
    [req.body.latitud, req.body.longitud] = coord;
    const [result] = await UsuarioModel.insertUsuario({
      nombre: req.body.nombre, apellidos: req.body.apellidos, email: req.body.email, 
      password: req.body.password, rol: req.body.rol, direccion: req.body.direccion, 
      localidad: req.body.localidad, provincia: req.body.provincia, status: req.body.status,
      longitud: req.body.longitud, latitud: req.body.latitud
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
  getImagen,
  editUserById,
  registerUser,
  loginUser,
  editImagen
};
