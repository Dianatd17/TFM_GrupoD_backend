const AutorModel = require('../models/autor.model');

const getAllAutores = async (req, res) => {
  try {
    const [autores] = await AutorModel.selectAllAutores();
    res.json(autores);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getAutorById = async (req, res) => {
  try {
    const { autorId } = req.params;
    const [autor] = await AutorModel.selectAutorById(autorId);
    res.json(autor[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createAutor = async (req, res) => {
  try {
    const [result] = await AutorModel.insertAutor(req.body);
    const [autor] = await AutorModel.selectAutorById(result.insertId);
    res.json(autor[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = { getAllAutores, getAutorById, createAutor };
