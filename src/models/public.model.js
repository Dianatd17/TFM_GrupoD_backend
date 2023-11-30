
const getByHighestrated = async () => {

  return db.query("SELECT  avg(h.puntuacion),h.logopeda_id FROM logopedas.usuarios u, logopedas_has_clientes H WHERE h.logopeda_id = u.id AND  u.rol = 'logopeda' and u.status = 1 GROUP BY h.logopeda_id having avg(h.puntuacion) > 3 order by h.logopeda_id desc limit 20");
};

const getByRating = async () => {
  //return db.query("SELECT  u.id,u.nombre,u.apellidos,u.email ,l.telefono,u.localidad,  l.precio, l.descripcion, l.experiencia,u.imagen ,h.puntuacion FROM  logopedas.usuarios u, logopedas.logopeda_datos l, logopedas_has_clientes h WHERE u.id = l.usuario_id AND h.logopeda_id = u.id AND  u.rol = 'logopeda' and u.status = 1 AND h.puntuacion in (4, 5)order by h.puntuacion desc");
  return db.query("SELECT  u.id,u.nombre,u.apellidos,u.email ,l.telefono,u.localidad,  l.precio, l.descripcion, l.experiencia,u.imagen ,h.puntuacion FROM  logopedas.usuarios u, logopedas.logopeda_datos l, logopedas_has_clientes h WHERE u.id = l.usuario_id AND h.logopeda_id = u.id AND  u.rol = 'logopeda' and u.status = 1 AND h.puntuacion in (4, 5)order by h.puntuacion desc");
};

const getByMap = () => {
  return db.query('SELECT * FROM tfm_db.users');
};


module.exports = { getByRating, getByHighestrated };
