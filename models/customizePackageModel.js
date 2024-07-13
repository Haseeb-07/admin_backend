const mongoose = require('mongoose');

const customizeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  whatsappNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  tourType: {
    type: String,
    enum: ['Adventure', 'Relaxation', 'Cultural', 'Romantic'],
    required: true
  },
  destinations: {
    type: [String],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  rooms: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  budget: {
    type: String,
    enum: ['Economy', 'Standard', 'Luxury'],
    required: true
  },
  numberOfPersons: {
    type: Number,
    required: true,
    min: 1
  }
}, { collection: 'customizepackages' }); // Specify collection name

const CustomizeModel = mongoose.model('Customize', customizeSchema);

module.exports = CustomizeModel;
