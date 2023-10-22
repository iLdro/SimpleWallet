const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const DataGraph = require('../models/graphModel');
const cors = require('cors');
const { verifyToken, generateToken } = require('../utils/jwt');

router.post('/register', async (req, res) => {
    try {
      console.log('req.body:', req.body)
      const { userName, email, password } = req.body;
      const user = await UserModel.findOne({ email });

      if (user) {
        console.log('email already exists')
        return res.status(400).json({ error: 'Email already exists' });
      }
      else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
  
        const newUser = new UserModel({
          userName: userName,
          email: email,
          password: hashedPassword
        });
          await newUser.save();
          res.status(201).json(newUser);
          console.log({user: newUser, userId: newUser._id});
          
        }
      } catch (error) {
        console.error('Error creating a user:', error);
        res.status(500).json({ error: 'Error creating a user' });
      }

  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    else {
      const token = generateToken(user);
      res.cookie('token', token, { httpOnly: true });
      console.log('token:', token);
      console.log("Login successful")
      res.status(200).json({ 
        message: 'Login successful', 
        token: token, 
        user: user, 
        userId: user._id });
    } 

});



module.exports = router;