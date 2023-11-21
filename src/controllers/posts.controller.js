const PostModel = require('../models/post.model');

const getAllPosts = async (req, res) => {
  try {
    const [posts] = await PostModel.selectAllPosts();
    res.json(posts);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const [post] = await PostModel.selectPostById(postId);
    res.json(post[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getPostsByAutorId = async (req, res) => {
  try {
    const { id = 0 } = req.params;
    if (id === 0)
      res.json({
        fatal:
          'No se ha especificado un id válido o la ruta no cuenta con el formato requerido',
      });
    const [posts] = await PostModel.selectPostsbyAutorId(parseInt(id));
    res.json(posts);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const [result] = await PostModel.insertPost(req.body);
    const [post] = await PostModel.selectPostById(result.insertId);
    res.json(post[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getAllPosts, getPostById, getPostsByAutorId, createPost };
