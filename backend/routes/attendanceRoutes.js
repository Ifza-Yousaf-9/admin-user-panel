const express = require('express');
const router = express.Router();

const {
    markAttendance,
    viewAttendance
} = require('../controllers/attendanceController');
const { getUserById } = require('../controllers/attendanceController');

router.post('/mark', markAttendance);
router.get('/view/:userId', viewAttendance);
router.get('/users/:userId', getUserById);

module.exports = router;
