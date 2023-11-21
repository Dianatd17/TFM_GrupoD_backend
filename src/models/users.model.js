const selectAllUsers = () => {
  return db.query('SELECT * FROM tfm_db.users');
};

module.exports = { selectAllUsers };
