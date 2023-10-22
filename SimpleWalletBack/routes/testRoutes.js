const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const { verifyToken, generateToken } = require('../utils/jwt');

router.all('*', verifyToken);

router.post('/test', async (req, res) => {
    try {
      return res.status(200).json({ message: 'Register successful' });
    } catch (error) {
        console.error('Error creating a user:', error);
        res.status(500).json({ error: 'Error creating a user' });
        }
  });

  
  module.exports = router;