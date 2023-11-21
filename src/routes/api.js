const router = require('express').Router();

router.use('/public', require('./api/public'));
router.use('/users', require('./api/users'));

module.exports = router;
