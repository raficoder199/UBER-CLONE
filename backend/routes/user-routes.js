const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const UserController = require('../controllers/user-controller');
const authChecker = require('../Middlewares/Auth-Check')





router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  UserController.registerUser
);

router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

],
UserController.loginUser
)

router.get('/profile', authChecker.AuthCheck, UserController.getProfile);

router.get('/logout', authChecker.AuthCheck, UserController.logoutUser);





module.exports = router;