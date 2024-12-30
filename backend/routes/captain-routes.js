const express = require('express');
const router = express.Router();
const CaptainController = require('../controllers/captain-controller')
const { body } = require('express-validator')
const authMiddleware = require('../Middlewares/Auth-Check')

router.post(
   '/register',
   [
     body('email')
       .isEmail()
       .withMessage('invalid email address'),
     body('fullname.firstname')
       .isLength({ min: 3 })
       .withMessage('first name must be at least 3 characters'),
     body('password')
       .isLength({ min: 6 })
       .withMessage('password must be at least 6 characters'),
     body('vehicle.color')
       .isLength({ min: 3 })
       .withMessage('color must be at least 3 characters'),
     body('vehicle.plate')
       .isLength({ min: 3 })
       .withMessage('plate must be at least 3 characters'),
     body('vehicle.capacity')
       .toInt() // Convert to an integer
       .isInt({ min: 1 })
       .withMessage('capacity must be at least 1'),
     body('vehicle.vehicleType')
       .isIn(['car', 'motorcycle', 'auto'])
       .withMessage('invalid vehicle type'),
   ],
   CaptainController.registerCaptain
 );

 router.post('/login',[
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

],
CaptainController.logincaptain
)

router.get('/profile', authMiddleware.authCaptain, CaptainController.getCaptainProfile)


router.get('/logout', authMiddleware.authCaptain, CaptainController.logoutcaptain)

module.exports = router;



