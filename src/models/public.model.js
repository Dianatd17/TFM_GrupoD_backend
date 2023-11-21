const getByRating = () => {
  return db.query('SELECT * FROM tfm_db.users');
};

const getByMap = () => {
  return db.query('SELECT * FROM tfm_db.users');
};

module.exports = { getByRating, getByMap };
