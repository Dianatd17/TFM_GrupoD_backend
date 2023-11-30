const EspecialidadModel = require('../models/especialidad.model');

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
    res.send('Respuesta de relacionar logopeda con especialidad');
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const putLogopedaIdespecialidad = async (req, res) => {
  try {
    res.send('Respuesta put /logopeda/:idespecialidad');
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const deleteLogopegaIdespecialidad = async (req, res) => {
  try {
    res.send('Respuesta delete /logopeda/:idespecialidad');
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
  putLogopedaIdespecialidad,
  deleteLogopegaIdespecialidad,
};
