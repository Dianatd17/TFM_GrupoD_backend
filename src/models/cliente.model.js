const selectAllClientes = () => {
  return db.query('select * from usuarios where rol = cliente');
};

const selectClienteById = (clienteId) => {
  return db.query('select * from usuarios where id = ?', [clienteId]);
};

const selectLogopedaByClientes = (idCliente) => {
  return db.query(
    `SELECT l.logopeda_id, l.cliente_id, u.nombre, u.apellidos, u.imagen,u.rol,u.status as estado_u, l.fecha_inicio, l.status
    FROM logopedas.logopedas_has_clientes l, logopedas.usuarios u
    WHERE l.logopeda_id = u.id AND l.cliente_id = ?;`,
    [idCliente]
  );
};

module.exports = {
    selectAllClientes,
    selectClienteById,
  selectLogopedaByClientes,
};
