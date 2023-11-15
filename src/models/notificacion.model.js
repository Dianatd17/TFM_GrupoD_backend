//fichero model que va a tener todas las querys de la tabla notificaciones

const selectAllNotificaciones = () => {
    return db.query('select * from notificaciones');
}

module.exports = { selectAllNotificaciones };