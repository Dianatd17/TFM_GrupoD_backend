const selectAllAutores = () => {
  return db.query('SELECT * FROM practica9.autores');
};

const selectAutorById = (autorId) => {
  return db.query('SELECT * FROM practica9.autores where id = ?', [autorId]);
};

const insertAutor = ({ nombre, email, imagen }) => {
  return db.query(
    'INSERT INTO practica9.autores (nombre, email, imagen) values (?, ?, ?)',
    [nombre, email, imagen]
  );
};

module.exports = { selectAllAutores, selectAutorById, insertAutor };
