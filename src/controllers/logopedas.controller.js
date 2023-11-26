const LogopedasModel = require('../models/logopedas.model');

const getAllLogopedas = async (req, res) => {
  try {
    res.send('Devolvemos los logopedas');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getLogopedaById = async (req, res) => {
  try {
    res.send('Devolvemos el logopeda cuyo id es recibido');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getInfancia = async (req, res) => {
  try {
    res.send('Devolvemos los especializados en infancia');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getAdultos = async (req, res) => {
  try {
    res.send('Devolvemos los especializados en adultos');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getEspecialidadIdEspecialidad = async (req, res) => {
  try {
    res.send(
      'todos los que tienen relación con id especialidad en especialidades_has_logopedas'
    );
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const postConectarLogopeda = async (req, res) => {
  try {
    res.send('crea relación del id del token con logopeda, si es el cliente');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putConectarIdCliente = async (req, res) => {
  try {
    res.send(
      'cambia status del id del token con el cliente, si es el logopeda'
    );
  } catch (error) {
    res.json({ Error: error.message });
  }
};
module.exports = {
  getAllLogopedas,
  getLogopedaById,
  getInfancia,
  getAdultos,
  getEspecialidadIdEspecialidad,
  postConectarLogopeda,
  putConectarIdCliente,
};
