const selectAllUsuarios = () => {
  return db.query('select * from usuarios');
};

const selectUsuarioById = (usuarioId) => {
  return db.query('select * from usuarios where id = ?', [usuarioId]);
};

const selectUsuarioByEmail = (email) => {
  return db.query('select * from usuarios where email = ?', [email])
}

const insertUsuario = ({nombre, apellidos, email, password, rol, direccion, localidad, provincia}) => {
  return db.query('insert into usuarios (nombre, apellidos, email, password, rol, direccion, localidad, provincia) values (?, ?, ?, ?, ?, ?, ?, ?)',
  [nombre, apellidos, email, password, rol, direccion, localidad, provincia]
  );
}

const insertDatosLogopeda = ({usuario_id, telefono, infancia_o_adulto}) => {
  return db.query('insert into logopeda_datos (usuario_id, telefono, infancia_o_adulto) values (?, ?, ?)',
  [usuario_id, telefono, infancia_o_adulto]
  );
}

module.exports = { selectAllUsuarios, selectUsuarioById, selectUsuarioByEmail, insertUsuario, insertDatosLogopeda };