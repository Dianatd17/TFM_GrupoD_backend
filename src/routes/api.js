const router = require('express').Router();

router.use('/especialidades', require('./api/especialidades'));
router.use('/logopedas', require('./api/logopedas'));



module.exports = router;