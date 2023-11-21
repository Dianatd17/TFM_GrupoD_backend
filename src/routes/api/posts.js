const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

router.get('/', PostsController.getAllPosts);
router.get('/autor/:id', PostsController.getPostsByAutorId);
router.get('/:postId', PostsController.getPostById);
router.post('/', PostsController.createPost);

module.exports = router;
