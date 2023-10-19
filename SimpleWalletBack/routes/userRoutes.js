const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const DataGraph = require('../models/graphModel');
const cors = require('cors');



router.post('/CreateUser', async (req, res) => {
    try {
      console.log('req.body:', req.body)
      const { userName, email, password } = req.body;

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = new UserModel({
        userName,
        email,
        password: hashedPassword
      });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating a user:', error);
      res.status(500).json({ error: 'Error creating a user' });
    }
  });

router.post('/Login', async (req, res) => {
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
      return res.status(200).json({ message: 'Logged in successfully' });
      //generate token 
    } 

});



module.exports = router;