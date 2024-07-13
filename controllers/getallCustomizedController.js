const CustomizeModel = require('../models/customizePackageModel');

async function getAllCustomizedController(req, res) {
  try {
    const customizedPackages = await CustomizeModel.find();
    res.status(200).json(customizedPackages);
  } catch (error) {
    console.error('Error fetching customized packages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = getAllCustomizedController;
