const PendingBooking = require('../models/PendingBooking');

// Controller to fetch all pending bookings
exports.getAllPendingBookings = async (req, res) => {
  try {
    const pendingBookings = await PendingBooking.find({ status: 'pending' });
    res.json(pendingBookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
