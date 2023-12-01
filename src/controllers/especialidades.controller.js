const EspecialidadModel = require('../models/especialidad.model');
const UsuarioModel = require('../models/usuario.model');

const getEspecialidades = async (req, res) => {
  try {
    const [result] = await EspecialidadModel.selectAllEspecialidades();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getEspecialidadesById = async (req, res) => {
  try {
    const { id } = req.params;
    const [especialidades] = await EspecialidadModel.selectEspecialidad(id);
    res.json(especialidades[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getEspecialidadesInfancia = async (req, res) => {
  try {
    const [result] = await EspecialidadModel.selectEspecialidadesInfancia();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getEspecialidadesAdultos = async (req, res) => {
  try {
    const [result] = await EspecialidadModel.selectEspecialidadesAdulto();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const relateLogopedaEspecialidad = async (req, res) => {
  try {
    const { idespecialidad } = req.params;
    const idlogopeda = req.body.user_id;
    const [logopedas] = await UsuarioModel.selectUsuarioById(idlogopeda);
    if (logopedas[0].rol === 'logopeda') {
      const [result] = await EspecialidadModel.insertEspecialidadToLogopeda(idespecialidad, idlogopeda);
      res.json(result);
    }
    return res.json({ fatal: 'El usuario debe ser un logopeda' });
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const deleteLogopegaIdespecialidad = async (req, res) => {
  try {
    const { idespecialidad } = req.params;
    const idlogopeda = req.body.user_id;
    const [result] = await EspecialidadModel.deleteEspecialidadLogopeda(idespecialidad, idlogopeda);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getEspecialidades,
  getEspecialidadesById,
  getEspecialidadesInfancia,
  getEspecialidadesAdultos,
  relateLogopedaEspecialidad,
  deleteLogopegaIdespecialidad,
};
