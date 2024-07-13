const express = require('express');
const router = express.Router();
const getConfirmedController = require('../controllers/getConfirmedController');

// Route to fetch confirmed bookings
router.get('/confirmed-bookings', getConfirmedController.getConfirmedBookings);

module.exports = router;
