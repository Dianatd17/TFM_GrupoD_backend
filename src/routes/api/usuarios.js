const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { checkEmail } = require('../../middlewares/usuarios.middleware');
const { checkToken } = require('../../middlewares/auth.middleware');
const UsuariosController = require('../../controllers/usuarios.controller');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, 'uploads');
    },
    filename : function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
 const upload =  multer({
    storage : storage,
    limits: {fileSize : 10 * 1024 *1024}
 });

// /usuarios/
router.get('/', UsuariosController.getAllUsuarios); // GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)

router.post('/email', UsuariosController.getUserByEmail); // devuelve el usuario con ese email. es POST en vez de GET por problemas pasando emails por la ruta

// /usuarios/register
router.post('/register', checkEmail, UsuariosController.registerUser); // (si rol = logopeda habrá que crearlo primero en tabla usuario y con el id creado crear el resto en logopeda_datos)

// /usuarios/login
router.post('/login', UsuariosController.loginUser);

// /usuarios/logopedas
router.use('/logopedas', require('./usuarios/logopedas'));

// /usuarios/clientes
router.use('/clientes', require('./usuarios/clientes'));

// /usuarios/admins
router.use('/admins', require('./usuarios/admins'));

// obtener imagen de un usuario
router.get('/imagen/:id', UsuariosController.getImagen)

router.get('/:id', UsuariosController.getUserById); // GET /:id (para el mismo usuario conectado. todos los campos. si rol (en el token) = logopeda habrá que hacer join con tabla logopeda_datos)

router.put('/', checkToken, UsuariosController.editUserById); // PUT (si rol = logopeda habrá que editar logopeda_datos también)
router.post('/imagen', checkToken, upload.single("image"), UsuariosController.editImagen);


module.exports = router;
