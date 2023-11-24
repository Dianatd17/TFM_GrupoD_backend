const router = require('express').Router();

const LogopedasController = require('../../../controllers/logopedas.controller');

router.get('/', (req, res) => {}); // (getAll. si es admin, muestra los que no están verificados también. si no, sólo los verificados)
router.get('/:id', (req, res) => {}); // (versión con los campos necesarios para mostrar a clientes/admins)
router.get('/infancia', (req, res) => {}); // (si infancia_o_adulto es infancia o ambos)
router.get('/adultos', (req, res) => {}); // (idem pero con adultos o ambos)
router.get('/especialidad/:idespecialidad', (req, res) => {}); // (todos los que tienen relación con id especialidad en especialidades_has_logopedas)
router.post('/conectar/:idlogopeda', (req, res) => {}); // (crea relación del id del token con logopeda, si es el cliente)
router.put('/conectar/:idcliente', (req, res) => {}); // (cambia status del id del token con el cliente, si es el logopeda)

module.exports = router;
