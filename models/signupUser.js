const mongoose = require('mongoose');

const signupUserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  streetAddress: {
    type: String,
    required: true
  }
}, { timestamps: true });

const SignupUser = mongoose.model('SignupUser', signupUserSchema, 'signupuser');

module.exports = SignupUser;
