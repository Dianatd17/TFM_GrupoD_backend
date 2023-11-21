const router = require('express').Router();

const UsersController = require('../../controllers/users.controller');

router.get('/', UsersController.getAllUsers);

module.exports = router;
