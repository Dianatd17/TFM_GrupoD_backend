const LogopedaModel = require('../models/logopeda.model');

const getAllLogopedas = async (req, res) => {
  console.log("hi");
  try {
    const [result] = await LogopedaModel.selectAllLogopedas();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getLogopedaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await LogopedaModel.selectLogopedaById(id);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getInfancia = async (req, res) => {
  try {
    // usamos selectLogopedaEdad('infancia')
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getAdultos = async (req, res) => {
  try {
    // usamos selectLogopedaEdad('adulto')
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getByEspecialidadId = async (req, res) => {
  try {
    //devuelve todos los que tienen relación con id especialidad en especialidades_has_logopedas
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const postConectarLogopeda = async (req, res) => {
  try {
    // crea relación del id del token con logopeda, si es el cliente
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putConectarIdCliente = async (req, res) => {
  try {
    //cambia status del id del token con el cliente, si es el logopeda
  } catch (error) {
    res.json({ Error: error.message });
  }
};
module.exports = {
  getAllLogopedas,
  getLogopedaById,
  getInfancia,
  getAdultos,
  getByEspecialidadId,
  postConectarLogopeda,
  putConectarIdCliente,
};
