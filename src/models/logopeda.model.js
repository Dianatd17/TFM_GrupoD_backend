const selectAllLogopedas = () => {
    return db.query('select * from usuarios where rol ="logopeda" ');
}

module.exports = { selectAllLogopedas };