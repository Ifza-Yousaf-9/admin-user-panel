const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log('Signup request received:', req.body);
    
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    // Create a JWT token
    const token = jwt.sign({ id: newAdmin._id, email: newAdmin.email }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const token = jwt.sign({ id: admin._id, email: admin.email, role: 'admin' }, 'your_jwt_secret', { expiresIn: '1h' });
  
      res.status(200).json({ token, role: 'admin' });
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  
  
module.exports = {
  signupAdmin,
  loginAdmin,
};
