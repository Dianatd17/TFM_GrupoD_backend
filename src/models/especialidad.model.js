//fichero model que va a tener todas las querys de la tabla ESPECILIDADES

const selectAllEspecialidades = () => {
    return db.query('select * from especialidades');

}

module.exports = { selectAllEspecialidades };