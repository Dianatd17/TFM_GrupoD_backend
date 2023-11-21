const UsersModel = require('../models/public.model');

const getByRating = async (req, res) => {
  try {
    const [top] = await PublicModel.selectAllUsers();
    res.json({ Error: error.message });
  } catch (error) {
    res.json({ Error: error.message });
  }
};

const getByMap = async (req, res) => {
  try {
    const [users] = await UsersModel.selectAllUsers();
    res.json(users);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { getByRating, getByMap };
