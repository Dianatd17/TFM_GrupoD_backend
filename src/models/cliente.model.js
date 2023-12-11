const selectAllClientes = () => {
  return db.query("select * from usuarios where rol = 'cliente'");
};

const selectClienteById = (clienteId) => {
  return db.query('select * from usuarios where id = ?', [clienteId]);
};

const selectLogopedaByClientes = (idCliente) => {
  return db.query(
    `SELECT l.id, u.nombre, l.logopeda_id , l.cliente_id, u.apellidos, u.email, u.localidad, d.precio, d.experiencia, l.puntuacion, d.infancia_o_adulto,d.descripcion, u.imagen, u.rol, u.status as estado_u, l.fecha_inicio, l.status
    FROM logopedas.logopedas_has_clientes l, logopedas.usuarios u, logopedas.logopeda_datos d
    WHERE l.logopeda_id = u.id AND l.cliente_id = ? AND l.logopeda_id = d.usuario_id;`,
    [idCliente]
  );
};



module.exports = {
  selectAllClientes,
  selectClienteById,
  selectLogopedaByClientes,
};
