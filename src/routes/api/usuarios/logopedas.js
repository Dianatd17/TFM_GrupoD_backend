const router = require('express').Router();

const LogopedasController = require('../../../controllers/logopedas.controller');

router.get('/', LogopedasController.getAllLogopedas); // (getAll. si es admin, muestra los que no están verificados también. si no, sólo los verificados)
router.get('/infancia', LogopedasController.getInfancia); // (si infancia_o_adulto es infancia o ambos)
router.get('/adultos', LogopedasController.getAdultos); // (idem pero con adultos o ambos)
router.get('/especialidad/:idespecialidad', LogopedasController.getByEspecialidadId); // (todos los que tienen relación con id especialidad en especialidades_has_logopedas)
router.get('/:id', LogopedasController.getLogopedaById); // (versión con los campos necesarios para mostrar a clientes/admins)
router.post('/conectar/:idlogopeda', LogopedasController.postConectarLogopeda); // (crea relación del id del token con logopeda, si es el cliente)
router.put('/conectar/:idcliente', LogopedasController.putConectarIdCliente); // (cambia status del id del token con el cliente, si es el logopeda)

module.exports = router;
