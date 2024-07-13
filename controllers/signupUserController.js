const SignupUser = require('../models/signupUser');

// Controller to fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await SignupUser.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
