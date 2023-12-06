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

const selectEspecialidadesByLogopeda = (logopedaId) => {
    return db.query('select * from especialidades where id in (select especialidad_id as id from especialidades_has_logopedas where logopeda_id=?) order by id', [logopedaId]);
}

const insertEspecialidadToLogopeda = (especialidadId, logopedaId) => {
    return db.query('insert into especialidades_has_logopedas (especialidad_id, logopeda_id) values (?, ?)',
    [especialidadId, logopedaId]);
}

const deleteEspecialidadLogopeda = (especialidadId, logopedaId) => {
    return db.query('delete from especialidades_has_logopedas where (especialidad_id = ? and logopeda_id = ?)',
    [especialidadId, logopedaId]);
}

module.exports = { 
    selectAllEspecialidades,
    selectEspecialidad,
    selectEspecialidadesInfancia,
    selectEspecialidadesAdulto,
    selectEspecialidadesByLogopeda,
    insertEspecialidadToLogopeda,
    deleteEspecialidadLogopeda
}