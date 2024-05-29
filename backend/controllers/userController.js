// const User = require('../models/userModel'); 
// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');


// //getAll user

// const getUsers = async (req, res) => {
//     const user = await User.find({}).sort({craetedAt: -1})

//     res.status(200).json(user)
// }

// //get Single user
// const getUser = async(req, res) => {
//     const { id } = req.params
//     if(!mongoose.Types.ObjectId.isValid(id))
//         {
//             return res.status(404).json({error: 'No user with that id'})
//         }

// const user = await User.findById(id)

// if(!user) {
//     return res.status(404).json({error:"Page not found"})
// }
// res.status(200).json(user)
// }


// //create  a user

// const createUser = async (req, res) => {
//     console.log(req.body); // Log the request body
//     const { name, email, password } = req.body;

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create the user with the hashed password
//         const user = await User.create({ name, email, password: hashedPassword });
//         res.status(200).json(user);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }
// const craeteLogin = async (req, res, next) => {
//     try {
//       const { email, password } = req.body;

//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(404).json({ message: "User not found." });
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);
//       if (!passwordMatch) {
//         return res.status(401).json({ message: "Invalid credentials." });
//       }

//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

//       res.status(200).json({ token });
//     } catch (error) {
//       next(error);
//     }
//   }



// //delete a user
// const deleteUser  = async(req,res) => {
//     const { id } = req.params
    
//     if(!mongoose.Types.ObjectId.isValid(id))
//         {
//             return res.status(404).json({error: 'No user with that id'})
//         }

//     //_id that's the property name
//     const user = await User.findOneAndDelete({_id : id})

//     if(!user) {
//         return res.status(404).json({error:"Page not found"})
//     }
//     res.status(200).json(user)
// }

// //Update the user   
// const updateUser = async (req, res) => {

//     const { id } = req.params
    
//     if(!mongoose.Types.ObjectId.isValid(id))
//         {
//             return res.status(404).json({error: 'No user with that id'})
//         }
// const user = await User.findOneAndUpdate({_id : id},{...req.body})


// if(!user) {
//     return res.status(404).json({error:"Page not found"})
// }
// res.status(200).json(user)

// }





// module.exports = {
//     createUser,
//     craeteLogin,
//     getUsers,
//     getUser,
//     deleteUser,
//     updateUser
// }

const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
// Get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
}

// Get single user
const getUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No user with that id' });
    }
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ error: 'Page not found' });
    }
    res.status(200).json(user);
}

// Create a user
const createUser = async (req, res) => {
    console.log(req.body); // Log the request body
    const { name, email, password } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create the user with the hashed password
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Create login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Return user data excluding the password
      const { password: _, ...userData } = user.toObject(); // exclude password from the response
      res.json(userData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to login user' });
    }
  };
// Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No user with that id' });
    }
    const user = await User.findOneAndDelete({ _id: id });
    if (!user) {
        return res.status(404).json({ error: 'Page not found' });
    }
    res.status(200).json(user);
}

// Update the user
const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No user with that id' });
    }
    const user = await User.findOneAndUpdate({ _id: id }, { ...req.body });
    if (!user) {
        return res.status(404).json({ error: 'Page not found' });
    }
    res.status(200).json(user);
}

module.exports = {
    createUser,
    loginUser, 
    getUsers,
    getUser,
    deleteUser,
    updateUser
};
