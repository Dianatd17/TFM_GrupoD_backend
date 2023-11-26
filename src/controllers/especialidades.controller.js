const EspecialidadesModel = require('../models/especialidades.model');

const getEspecialidades = async (req, res) => {
  try {
    res.send('Respuesta get especialidades');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getEspecialidadesById = async (req, res) => {
  try {
    res.send('Respuesta get especialidades por id');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getEspecialidadesInfancia = async (req, res) => {
  try {
    res.send('Respuesta get especialidades infancia');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getEspecialidadesAdultos = async (req, res) => {
  try {
    res.send('Respuesta get especialidades adultos');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const relateLogopedaEspecialidad = async (req, res) => {
  try {
    res.send('Respuesta de relacionar logopeda con especialidad');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putLogopedaIdespecialidad = async (req, res) => {
  try {
    res.send('Respuesta put /logopeda/:idespecialidad');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const deleteLogopegaIdespecialidad = async (req, res) => {
  try {
    res.send('Respuesta delete /logopeda/:idespecialidad');
  } catch (error) {
    res.json({ Error: error.message });
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
