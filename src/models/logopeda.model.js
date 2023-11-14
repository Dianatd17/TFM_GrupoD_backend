//fichero model que va a tener todas las querys de la tabla LOGOPEDAS

const selectAllLogopedas = () => {
    return db.query('select * from logopedas');

}

module.exports = { selectAllLogopedas };