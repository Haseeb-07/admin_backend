const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

// Route to fetch all destinations
router.get('/', destinationController.getAllDestinations);

// Route to add a new destination
router.post('/', destinationController.addDestination);

// Route to update a destination
router.put('/:id', destinationController.updateDestination);

// Route to delete a destination
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;
