const PublicModel = require('../models/public.model');

const getByRating = async (req, res) => {
  try {
    res.send('Aquí devolveremos los usuarios por rating');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getByLocation = async (req, res) => {
  try {
    res.send('Aquí devolveremos los usuarios por ubicación');
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { getByRating, getByLocation };
