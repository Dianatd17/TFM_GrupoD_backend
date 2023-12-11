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
    return db.query(`${query_start} and u.id in (select logopeda_id as id from especialidades_has_logopedas where especialidad_id = ?) ${query_end}`, [idespecialidad]);
}

const selectLogopedasPendientes = () => {
    return db.query(`select u.id, u.nombre, u.apellidos, u.email, d.telefono, u.longitud, u.latitud, u.direccion, u.localidad, u.provincia, u.imagen, d.precio, d.experiencia, d.descripcion, d.infancia_o_adulto, AVG(h.puntuacion) as puntuacion from usuarios u left join logopeda_datos d on u.id = d.usuario_id left join logopedas_has_clientes h on u.id = h.logopeda_id where u.rol = 'logopeda' and u.status = 0 ${query_end}`);
}

const selectClientesByLogopedas = (idLogopeda) =>{
    return db.query(`SELECT l.id ,l.logopeda_id, l.cliente_id, u.nombre, u.apellidos, u.email, u.localidad,  u.imagen, l.fecha_inicio,u.rol,u.status as estado_u, l.status
    FROM logopedas.logopedas_has_clientes l, logopedas.usuarios u
    WHERE l.cliente_id = u.id AND l.logopeda_id = ?;`,[idLogopeda])
}

const selectClass = (logopedaId, clienteId) =>{
    return db.query('select * FROM logopedas.logopedas_has_clientes WHERE logopeda_id = ? and cliente_id = ?', [logopedaId, clienteId])
}

const selectclasById = (id) =>{
    return db.query(`Select * FROM logopedas.logopedas_has_clientes WHERE id = ?`,[id])
}


//Se busca en la tabla Logopeda_Has_Clientes si ya existe un registro entre el cliente y el logopeda activo
const selectConnectionLogopedasHasClientes = (logopeda_id, cliente_id) => {
    return db.query("SELECT count(*)as cnt FROM  logopedas_has_clientes  WHERE logopeda_id=? and cliente_id =? and fecha_fin is null", [logopeda_id, cliente_id]);
}

//Se busca en la tabla logopedas_has_clientes los comentarios 
const selectComentariosById = (id) => {
    const query_comentarios = "select u.nombre,l.comentarios,l.puntuacion from logopedas_has_clientes l,usuarios u where l.cliente_id = u.id and  logopeda_id = ? and puntuacion > 0"

    return db.query(query_comentarios, [id]);
}
const insertConnection = ({ logopeda_id, cliente_id, comentarios, puntuacion, fecha_inicio }) => {
    return db.query('INSERT INTO logopedas_has_clientes (logopeda_id, cliente_id,comentarios,puntuacion, fecha_inicio) VALUES (?,?,?,?,?)',
        [logopeda_id, cliente_id, comentarios, puntuacion, fecha_inicio]);
}

const updateConnection = (id, { comentarios, puntuacion, fecha_fin, status }) => {
    return db.query('UPDATE logopedas_has_clientes SET comentarios = ?,puntuacion = ?, fecha_fin = ? , status = ?  WHERE id = ? ',
        [comentarios, puntuacion, fecha_fin, status, id]);
}

const updateClase = (claseId, {id, logopeda_id, cliente_id, comentarios, puntuacion, fecha_inicio, fecha_fin, status}) =>{
    return db.query('UPDATE logopedas_has_clientes SET id = ?, logopeda_id = ?, cliente_id = ?, comentarios = ?, puntuacion = ?, fecha_inicio = ?,  fecha_fin = ?, status = ? WHERE id = ?' , [id, logopeda_id, cliente_id, comentarios, puntuacion, fecha_inicio, fecha_fin, status, claseId])
}

module.exports = {
    selectAllLogopedas,
    selectLogopedaById,
    selectLogopedasByEdad,
    selectLogopedasByEspecialidad,
    selectLogopedasPendientes,
    selectConnectionLogopedasHasClientes,
    selectComentariosById,
    insertConnection,
    updateConnection,
    selectClientesByLogopedas,
    selectClass,
    selectclasById,
    updateClase
}