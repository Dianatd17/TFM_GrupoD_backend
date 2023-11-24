const router = require('express').Router();

const UsuariosController = require('../../controllers/usuarios.controller');

// /usuarios/
router.get('/:id', (req, res) => {}); // GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)
router.put('/:id', (req, res) => {}); // PUT /:id (si rol = logopeda habrá que editar logopeda_datos también)

// /usuarios/register
router.post('/register', (req, res) => {}); // (si rol = logopeda habrá que crearlo primero en tabla usuario y con el id creado crear el resto en logopeda_datos)

// /usuarios/login
router.post('/login', (req, res) => {});

// /usuarios/logopedas
router.use('/logopedas', require('./usuarios/logopedas'));

// /usuarios/clientes
router.use('/clientes', require('./usuarios/clientes'));

// /usuarios/admins
router.use('/admins', require('./usuarios/admins'));

module.exports = router;
