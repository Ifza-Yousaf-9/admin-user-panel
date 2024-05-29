const Attendance = require('../models/attendanceModel');

const markAttendance = async (req, res) => {
    const { userId, status } = req.body;
    const date = new Date();

    try {
        const newAttendance = new Attendance({ userId, date, status });
        await newAttendance.save();
        res.json({ message: 'Attendance marked successfully' });
    } catch (error) {
        console.error('Error marking attendance:', error);
        res.status(500).json({ error: 'Failed to mark attendance' });
    }
};

const viewAttendance = async (req, res) => {
    const { userId } = req.params;

    try {
        const attendanceData = await Attendance.find({ userId });
        res.json(attendanceData);
    } catch (error) {
        console.error('Error getting attendance data:', error);
        res.status(500).json({ error: 'Failed to fetch attendance data' });
    }
};
// controllers/userController.js
const User = require('../models/userModel');

const getUserById = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: 'Failed to fetch user details' });
    }
};




module.exports = {
    markAttendance,
    viewAttendance,
    getUserById
};
