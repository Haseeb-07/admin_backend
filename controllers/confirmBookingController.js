const PendingBooking = require('../models/PendingBooking');

// Controller to confirm a booking
exports.confirmBooking = async (req, res) => {
  try {
    const { bookingId } = req.params; // Assuming you pass bookingId as a route parameter
    const booking = await PendingBooking.findByIdAndUpdate(
      bookingId,
      { status: 'confirmed' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
