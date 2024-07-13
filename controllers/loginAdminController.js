const LoginAdmin = require('../models/LoginAdmin');

// Controller function to handle login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists with the provided email
    const user = await LoginAdmin.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password matches
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // If email and password are correct, return success
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { loginAdmin };
