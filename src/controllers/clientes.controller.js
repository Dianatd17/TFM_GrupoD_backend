const ClienteModel = require('../models/cliente.model');

const getAllClientes = async (req, res) => {
  try {
    const [result] = await ClienteModel.selectAllClientes();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: `No hay resultados` });
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

const getClienteById = async (req, res) => {
  try {
    const [result] = await ClienteModel.selectClienteById();
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(204).json({ msg: `No hay resultados` });
    }
  } catch (error) {
    res.status(500).json({ fatal: error.message });
  }
};

const getClientesByLogopeda = async (req, res) => {
  try {
    const {idCliente} = req.params
    const [result] = await ClienteModel.selectLogopedaByClientes(idCliente);
    res.send(result);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { getAllClientes, getClienteById, getClientesByLogopeda };
