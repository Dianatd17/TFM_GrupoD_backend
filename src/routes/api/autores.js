const router = require('express').Router();

const AutoresController = require('../../controllers/autores.controller');

router.get('/', AutoresController.getAllAutores);
router.get('/:autorId', AutoresController.getAutorById);
router.post('/', AutoresController.createAutor);

module.exports = router;