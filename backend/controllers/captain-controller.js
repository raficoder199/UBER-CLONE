  const CaptainModel = require('../models/Captain-model');
  const captainService = require('../services/captain-services');
  const {validationResult} = require('express-validator')
  const blacklist = require('../models/blacklist-token')


  module.exports.registerCaptain = async function (req, res, next) {
    try {
      // Validate request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { fullname, email, password, vehicle } = req.body;

      // Check if captain exists
      const isCaptainExist = await CaptainModel.findOne({ email });
      if (isCaptainExist) {
        return res.status(400).json({ message: 'Captain already exists' });
      }

      // Hash the password
      const hashPassword = await CaptainModel.hashPassword(password);

      // Register captain
      const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType,
      });

      // Respond with success
      res.status(201).json({ message: 'Captain registered successfully', captain });
    } catch (error) {
      next(error); // Pass errors to the global error handler
    }
  };

  module.exports.logincaptain = async function(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
  
      const captain = await CaptainModel.findOne({ email }).select('+password');
      if (!captain) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await captain.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = await captain.generateAuthToken();
      res.cookie('token', token, {
        httpOnly: true, // Prevent JavaScript access
        secure: process.env.NODE_ENV === 'production', // Only for HTTPS in production
        sameSite: 'Strict', // CSRF protection
      });
      res.status(200).json({ token, captain });
    } catch (error) {
      next(error);
    }
  };

  module.exports.getCaptainProfile = async function(req, res, next) {
    if(!req.captain){
      return res.status(401).json({ message: "no captain founded" });
    }

      res.status(200).json({ captain: req.captain });
  }

  module.exports.logoutcaptain = async function(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    
    await blacklist.create({token})
    res.clearCookie('token')



    res.status(200).json({message: "logged out successfully"})
  }