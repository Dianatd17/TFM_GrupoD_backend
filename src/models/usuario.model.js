const query_start = "select u.*, d.telefono, d.precio, d.experiencia, d.descripcion, d.infancia_o_adulto from usuarios u left join logopeda_datos d on u.id = d.usuario_id";

const selectAllUsuarios = () => {
  return db.query(`${query_start}`);
};

const selectUsuarioById = (usuarioId) => {
  return db.query(`${query_start} where u.id = ?`, [usuarioId]);
};

const selectUsuarioByEmail = (email) => {
  return db.query(`${query_start} where email = ?`, [email]);
}

const selectImagen = (id) => {
  return db.query('select imagen from usuarios where id = ?', [id]);
}

const selectUsuarioRol = (usuarioRol) => {
  return db.query('select email from usuarios where rol = ?', [usuarioRol]);
};

const insertUsuario = ({ nombre, apellidos, email, password, rol, direccion, localidad, provincia, status, longitud, latitud }) => {
  return db.query('insert into usuarios (nombre, apellidos, email, password, rol, direccion, localidad, provincia, status, longitud, latitud) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [nombre, apellidos, email, password, rol, direccion, localidad, provincia, status, longitud, latitud]
  );
}

const insertDatosLogopeda = ({ usuario_id, telefono, infancia_o_adulto }) => {
  return db.query('insert into logopeda_datos (usuario_id, telefono, infancia_o_adulto) values (?, ?, ?)',
    [usuario_id, telefono, infancia_o_adulto]
  );
}

const updateUsuario = ({ id, nombre, apellidos, email, direccion, localidad, provincia, longitud, latitud }) => {
  return db.query('update usuarios set nombre=?, apellidos=?, email=?, direccion=?, localidad=?, provincia=?, longitud=?, latitud=? where id = ?',
    [nombre, apellidos, email, direccion, localidad, provincia, longitud, latitud, id]
  );
}

const updatetDatosLogopeda = ({ usuario_id, telefono, precio, experiencia, descripcion, infancia_o_adulto }) => {
  return db.query('update logopeda_datos set telefono=?, precio=?, experiencia=?, descripcion=?, infancia_o_adulto=? where usuario_id = ?',
    [telefono, precio, experiencia, descripcion, infancia_o_adulto, usuario_id]
  );
}

const updatePassword = (id, password) => {
  return db.query('update usuarios set password=? where id = ?', [password, id]);
}

const updateImagen = (id, path) => {
  return db.query('update usuarios set imagen = ? where id = ?', [path, id]);
}

module.exports = {
  selectAllUsuarios,
  selectUsuarioById,
  selectUsuarioByEmail,
  selectImagen,
  selectUsuarioRol,
  insertUsuario,
  insertDatosLogopeda,
  updateUsuario,
  updatetDatosLogopeda,
  updatePassword,
  updateImagen
};