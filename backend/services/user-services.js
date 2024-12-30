// user-services.js
const UserModel = require('../models/user-models');

module.exports.createUser = async ({
  firstname, lastname, email, password
}) => {
  if (!firstname || !email || !password) {
    throw new Error('All fields are required');
  }
  
  const user = await UserModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password
  });

  return user;
};
