const selectAllPosts = () => {
  return db.query('SELECT * FROM practica9.posts;');
};

const selectPostById = (postId) => {
  return db.query('SELECT * FROM practica9.posts where id = ?', [postId]);
};

const selectPostsbyAutorId = (autorId) => {
  return db.query('SELECT * FROM practica9.posts where idautor = ?', [autorId]);
};

const insertPost = ({ titulo, descripcion, categoria, idautor }) => {
  return db.query(
    'INSERT INTO practica9.posts (titulo, descripcion, categoria, idautor) values (?, ?, ?, ?)',
    [titulo, descripcion, categoria, idautor]
  );
};

module.exports = {
  selectAllPosts,
  selectPostById,
  selectPostsbyAutorId,
  insertPost,
};
