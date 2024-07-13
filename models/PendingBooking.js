const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for pending booking
const PendingBookingSchema = new Schema({
  package_name: {
    type: String,
    required: true
  },
  
  booked_by: {
    email: {
      type: String,
      required: true
    }
  },
  booking_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  numberOfPersons: {
    type: Number,
    required: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  destinations: {
    type: [String], // Assuming an array of strings for destinations
    required: true
},
  pickupLocation: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  }
}, { collection: 'pendingbookings' }); // Set collection name to 'pendingbookings'

// Create and export PendingBooking model
module.exports = mongoose.model('PendingBooking', PendingBookingSchema);
