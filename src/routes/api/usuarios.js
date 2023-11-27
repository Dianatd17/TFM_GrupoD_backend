const router = require('express').Router();

const UsuariosController = require('../../controllers/usuarios.controller');

// /usuarios/
router.get('/', UsuariosController.getAllUsuarios); // GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)

router.get('/:id', UsuariosController.getUserById); // GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)
router.put('/:id', UsuariosController.editUserById); // PUT /:id (si rol = logopeda habrá que editar logopeda_datos también)

// /usuarios/register
router.post('/register', UsuariosController.registerUser); // (si rol = logopeda habrá que crearlo primero en tabla usuario y con el id creado crear el resto en logopeda_datos)

// /usuarios/login
router.post('/login', UsuariosController.loginUser);

// /usuarios/logopedas
router.use('/logopedas', require('./usuarios/logopedas'));

// /usuarios/clientes
router.use('/clientes', require('./usuarios/clientes'));

// /usuarios/admins
router.use('/admins', require('./usuarios/admins'));

module.exports = router;
