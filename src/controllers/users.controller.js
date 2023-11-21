const UsersModel = require('../models/users.model');

const getAllUsers = async (req, res) => {
  try {
    const [users] = await UsersModel.selectAllUsers();
    res.json(users);
  } catch (error) {
    res.json({ Error: error.message });
  }
};

module.exports = { getAllUsers };
