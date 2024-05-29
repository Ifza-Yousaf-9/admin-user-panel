const express = require('express');

const {
    createUser,loginUser,getUsers,getUser,deleteUser,updateUser
} =require('../controllers/userController')

const router = express.Router();



router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/',createUser);
router.post('/login',loginUser)

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
