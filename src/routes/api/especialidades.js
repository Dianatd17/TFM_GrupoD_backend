const router = require('express').Router();

const EspecialidadesController = require('../../controllers/especialidades.controller');

router.get('/', (req, res) => {});
router.get('/:id', (req, res) => {});
router.get('/infancia', (req, res) => {}); // (es_infancia = 1)
router.get('/adultos', (req, res) => {}); // (es_infancia = 0)
router.post('/logopeda/:idespecialidad', (req, res) => {}); // (crea relación con usuario del id del token con especialidad, si es logopeda)
router.put('/logopeda/:idespecialidad', (req, res) => {});
router.delete('/logopeda/:idespecialidad', (req, res) => {});

module.exports = router;
