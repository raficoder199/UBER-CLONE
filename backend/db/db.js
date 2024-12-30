const mongoose = require('mongoose');


function connectdb (){
    mongoose.connect(process.env.MONGODB_URI,)
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));
}

module.exports = connectdb;