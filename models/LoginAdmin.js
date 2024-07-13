const mongoose = require('mongoose');

// Define the schema for LoginAdmin
const loginAdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, { collection: 'adminlogin' }); // Specify the collection name

// Create and export the LoginAdmin model
module.exports = mongoose.model('LoginAdmin', loginAdminSchema);
