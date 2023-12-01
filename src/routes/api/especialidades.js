const router = require('express').Router();

const EspecialidadesController = require('../../controllers/especialidades.controller');

router.get('/', EspecialidadesController.getEspecialidades);
router.get('/infancia', EspecialidadesController.getEspecialidadesInfancia); // (es_infancia = 1)
router.get('/adulto', EspecialidadesController.getEspecialidadesAdultos); // (es_infancia = 0)
router.get('/:id', EspecialidadesController.getEspecialidadesById);
router.post(
  '/logopeda/:idespecialidad',
  EspecialidadesController.relateLogopedaEspecialidad
); // (crea relación con usuario del id (user_id en el body) del token con especialidad, si es logopeda)
router.delete(
  '/logopeda/:idespecialidad',
  EspecialidadesController.deleteLogopegaIdespecialidad
);

module.exports = router;
