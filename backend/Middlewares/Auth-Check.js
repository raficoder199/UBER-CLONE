const UserModel = require('../models/user-models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const captainModel = require('../models/Captain-model')

const BlacklistTokenModel = require('../models/blacklist-token');


module.exports.AuthCheck = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized, token missing' });
    }

    try {
        // Check if the token is blacklisted
        const isBlacklisted = await BlacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is blacklisted' });
        }

        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

       

        // Fetch the user from the database
        const user = await UserModel.findById(decoded.id || decoded._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Attach user to the request object
        req.user = user;
        next();
    } catch (error) {
       
        res.status(401).json({ message: 'Unauthorized, invalid token', error: error.message });
    }
};

module.exports.authCaptain = async function(req, res, next) {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(401).json({ message: 'Captain not found' });
    }

    req.captain = captain; // Attach captain to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token', error: error.message });
  }
};
