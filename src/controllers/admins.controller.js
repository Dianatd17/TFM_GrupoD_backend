const AdminModel = require('../models/admin.model');

const putVerificarIdlogopeda = async (req, res) => {
  try {
    res.send('(si es admin)');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const putVerificarIdcliente = async (req, res) => {
  try {
    res.send('(si es admin)');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { putVerificarIdlogopeda, putVerificarIdcliente };
