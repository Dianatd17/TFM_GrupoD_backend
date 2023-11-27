const ClienteModel = require('../models/cliente.model');

const getClientes = async (req, res) => {
  try {
    res.send('Devolvemos los clientes');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getClienteById = async (req, res) => {
  try {
    res.send('Devolvemos cliente');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getClientesByLogopeda = async (req, res) => {
  try {
    res.send('Devolvemos los clientes del logopeda cuyo id es recibido');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { getClientes, getClienteById, getClientesByLogopeda };
