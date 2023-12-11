const router = require('express').Router();
const { checkToken } = require('../../../middlewares/auth.middleware');
const { checkAdmin } = require('../../../middlewares/admins.middleware');
const LogopedasController = require('../../../controllers/logopedas.controller');

router.get('/', LogopedasController.getAllLogopedas); // (getAll. si es admin, muestra los que no están verificados también. si no, sólo los verificados)
router.get('/infancia', LogopedasController.getInfancia); // (si infancia_o_adulto es infancia o ambos)
router.get('/adulto', LogopedasController.getAdultos); // (idem pero con adultos o ambos)
router.get('/especialidad/:idespecialidad', LogopedasController.getByEspecialidadId); // (todos los que tienen relación con id especialidad en especialidades_has_logopedas)
router.get('/comentarios/:id', LogopedasController.getComentariosById)
router.get('/pendientes', checkToken, checkAdmin, LogopedasController.getLogopedasPendientes); // (devuelve logopedos con status pendiente, sólo admins)
router.get('/:id', LogopedasController.getLogopedaById); // (versión con los campos necesarios para mostrar a clientes/admins)
router.post('/conectar/', LogopedasController.postConectarLogopeda); // (crea relación del id del token con logopeda, si es el cliente)
router.put('/conectar/:idConecta', LogopedasController.putConectarLogopeda); // (cambia status del id del token con el cliente, si es el logopeda)

/* GET QUE DEVUELVE LOS CLIENTES DEL LOGOPEDA */
router.get('/clientes/:idLogopeda', LogopedasController.getClientesByLogopedas )
router.get('/clase/:claseId', LogopedasController.getClasById)
router.post('/clase', LogopedasController.getClass) // dados ids de logopeda y cliente en el body, devuelve su clase/relación
router.put('/clase/:claseId', LogopedasController.putStatusClases)
module.exports = router;
