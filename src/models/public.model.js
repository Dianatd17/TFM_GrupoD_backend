
const getByRating = async () => {
  //return db.query("SELECT  u.id,u.nombre,u.apellidos,u.email ,l.telefono,u.localidad,  l.precio, l.descripcion, l.experiencia,u.imagen ,h.puntuacion FROM  logopedas.usuarios u, logopedas.logopeda_datos l, logopedas_has_clientes h WHERE u.id = l.usuario_id AND h.logopeda_id = u.id AND  u.rol = 'logopeda' and u.status = 1 AND h.puntuacion in (4, 5)order by h.puntuacion desc");
  return db.query("SELECT  u.id,u.nombre,u.apellidos,u.email ,l.telefono, u.localidad,  l.precio, l.descripcion, l.experiencia,u.imagen, AVG(h.puntuacion) as puntuacion FROM logopedas.usuarios u, logopedas.logopeda_datos l , logopedas_has_clientes h WHERE u.id = l.usuario_id AND h.logopeda_id=u.id AND  u.rol = 'logopeda' and u.status = 1 GROUP BY u.id, u.nombre, u.apellidos, u.email, l.telefono, u.localidad, l.precio, l.descripcion, l.experiencia, u.imagen having puntuacion between 4 and 5 order by puntuacion desc limit 20");
};

const getByMap = () => {
  return db.query('SELECT * FROM tfm_db.users');
};




module.exports = { getByRating, getByMap };
