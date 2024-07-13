const express = require('express');
const { loginAdmin } = require('../controllers/loginAdminController');

const router = express.Router();

// POST route for user login
router.post('/login', loginAdmin);

module.exports = router;
