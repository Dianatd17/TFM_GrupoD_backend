const selectAllEspecialidades = () => {
    return db.query('select * from especialidades');
}

const selectEspecialidad = (especialidadId) => {
    return db.query('select * from especialidades where id = ?', [especialidadId]);
}

const selectEspecialidadesInfancia = () => {
    return db.query('select * from especialidades where es_infancia in (1, 2)');
}

const selectEspecialidadesAdulto = () => {
    return db.query('select * from especialidades where es_infancia in (0, 2)');
}

module.exports = { selectAllEspecialidades, selectEspecialidad, selectEspecialidadesInfancia, selectEspecialidadesAdulto }