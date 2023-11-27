const selectAllUsuarios = () => {
  return db.query('select * from usuarios');
};

/* const selectUserById = () => {
  return db.query('select * from usuarios');
}; */

module.exports = { selectAllUsuarios };