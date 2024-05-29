// routes/admin.js
const express = require('express');
const router = express.Router();
const { signupAdmin, loginAdmin } = require('../controllers/adminController');

// Admin signup route
router.post('/signup', signupAdmin);

// Admin login route
router.post('/login', loginAdmin);

module.exports = router;
