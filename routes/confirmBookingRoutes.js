const express = require('express');
const router = express.Router();
const confirmBookingController = require('../controllers/confirmBookingController');

// Route to confirm a booking
router.put('/confirm-booking/:bookingId', confirmBookingController.confirmBooking);

module.exports = router;
