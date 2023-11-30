const query_start = "select u.id, u.nombre, u.apellidos, u.email, d.telefono, u.longitud, u.latitud, u.direccion, u.localidad, u.provincia, u.imagen, d.precio, d.experiencia, d.descripcion, d.infancia_o_adulto, AVG(h.puntuacion) as puntuacion from usuarios u left join logopeda_datos d on u.id = d.usuario_id left join logopedas_has_clientes h on u.id = h.logopeda_id where u.rol = 'logopeda' and u.status = 1";
const query_end = "group by u.id, u.nombre, u.apellidos, u.email, d.telefono, u.longitud, u.latitud, u.direccion, u.localidad, u.provincia, u.imagen, d.precio, d.experiencia, d.descripcion, d.infancia_o_adulto";

const selectAllLogopedas = () => {
    return db.query(`${query_start} ${query_end}`);
}

const selectLogopedaById = (id) => {
    return db.query(`${query_start} and u.id = ? ${query_end}`, [id]);
}

const selectLogopedasByEdad = (edad) => {
    return db.query(`${query_start} and d.infancia_o_adulto in (?, 'ambos') ${query_end}`, [edad]);
}

const selectLogopedasByEspecialidad = (idespecialidad) => {
    return db.query (`${query_start} and u.id in (select logopeda_id as id from especialidades_has_logopedas where especialidad_id = ?) ${query_end}`, [idespecialidad]);
}

const insertConnection = (cliente_id, logopeda_id) => {
    return db.query ('INSERT INTO logopedas_has_clientes (logopeda_id, cliente_id, status) VALUES (?,?,?)', 
    [logopeda_id, cliente_id, 'pendiente']);
}

const updateConnection = (cliente_id, logopeda_id, status, fecha) => {
    return db.query ('UPDATE logopedas_has_clientes SET status = ?, fecha_inicio = ? WHERE cliente_id = ? and logopeda_id = ?)', 
    [status, fecha, cliente_id, logopeda_id]);
}

module.exports = { 
    selectAllLogopedas, 
    selectLogopedaById, 
    selectLogopedasByEdad, 
    selectLogopedasByEspecialidad,
    insertConnection,
    updateConnection
}