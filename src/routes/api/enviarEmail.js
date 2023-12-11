const router = require('express').Router();


const EnviarEmailController = require('../../controllers/enviarEmail.controller')

router.post('/', EnviarEmailController.postEmail);


module.exports = router;