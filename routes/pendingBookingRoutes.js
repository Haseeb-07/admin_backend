const express = require('express');
const router = express.Router();
const pendingBookingController = require('../controllers/pendingBookingController');

// Route to fetch all pending bookings
router.get('/pendingbookings', pendingBookingController.getAllPendingBookings);

module.exports = router;
