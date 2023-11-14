const LogopedaModel = require('../models/logopeda.model');

const getAllLogopedas = async (req, res) => {
    try {
        const [result] = await LogopedaModel.selectAllLogopedas();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllLogopedas };