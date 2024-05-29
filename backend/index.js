require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const attendanceRoutes = require('./routes/attendanceRoutes');
const userPanel = require('./routes/UserRoute');
const adminRoute = require('./routes/AdminRoute')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: false})); // Use bodyParser to parse JSON bodies

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/user', userPanel);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/admin', adminRoute);

// Connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Server is running on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
