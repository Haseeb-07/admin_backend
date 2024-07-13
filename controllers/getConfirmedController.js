const PendingBooking = require('../models/PendingBooking');

// Controller to fetch confirmed bookings
exports.getConfirmedBookings = async (req, res) => {
  try {
    const confirmedBookings = await PendingBooking.find({ status: 'confirmed' });
    res.json(confirmedBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
