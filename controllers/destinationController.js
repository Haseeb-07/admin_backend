const Destination = require('../models/destination');

// Controller function to fetch all destinations
exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to add a new destination
exports.addDestination = async (req, res) => {
  const { name, description } = req.body;
  const newDestination = new Destination({ name, description });
  try {
    const savedDestination = await newDestination.save();
    res.status(201).json(savedDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to update a destination
exports.updateDestination = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    res.json(updatedDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to delete a destination
exports.deleteDestination = async (req, res) => {
  const { id } = req.params;
  try {
    await Destination.findByIdAndDelete(id);
    res.json({ message: 'Destination deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
