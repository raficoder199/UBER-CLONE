const UserModel = require('../models/user-models');
const userservice = require('../services/user-services');
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require ('../models/blacklist-token');




module.exports.registerUser = async (req, res, next) => {

    const errors = await validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {fullname, email, password} = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser){
        return res.status(400).json({ message: 'user already exists' });
    }

    const hashedPassword = await UserModel.hashPassword(password);

    const user = await userservice.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword ,
    })

    const token = user.generateAuthToken();

    res.status(201).json({user, token})




}

module.exports.loginUser = async (req, res, next) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
   

     
    try {
      const user = await UserModel.findOne({ email }).select('+password');
      if (!user) {
          return res.status(401).json({ message: "Invalid Email or Password" });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
          return res.status(401).json({ message: "Invalid Email or Password" });
      }

      const token = user.generateAuthToken();
      res.cookie('token', token, {
        httpOnly: true, // Prevent JavaScript access
        secure: process.env.NODE_ENV === 'production', // Only for HTTPS in production
        sameSite: 'Strict', // CSRF protection
      });
      res.status(200).json({ user, token });
     
  } catch (error) {
    
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};



module.exports.getProfile = async function (req, res, next) {
  try {
      // The user is already attached to the request object via middleware
      const user = req.user; 

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ user }); // Return the user profile
  } catch (error) {
      
      res.status(500).json({ message: 'Internal Server Error' });
  }
};



module.exports.logoutUser = async (req, res) => {
    // Clear token cookie
    res.clearCookie('token');
  
    // Extract token from header or cookie
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Token missing or invalid' });
    }
  
    try {
      // Add token to blacklist (if applicable)
      await BlacklistTokenModel.create({ token });
  
      res.status(201).json({ message: 'Logged out successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  