const PublicModel = require('../models/public.model');

const getByRating = async (req, res) => {
  try {
    const [result] = await PublicModel.getByRating();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }

};


const getByLocation = async (req, res) => {
  try {
    const [result] = await PublicModel.getByRating();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }

};


module.exports = { getByRating, getByLocation };
