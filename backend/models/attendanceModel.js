const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Present', 'Absent', 'Late', 'Excused'] // Adjust this as per your requirements
  }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
