const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Define Captain schema
const CaptainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      minlength: [3, "at least 3 characters"],
      required: true,
    },
    lastname: {
      type: String,
      minlength: [3, "at least 3 characters"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "at least 6 characters"],
    select: false, // Avoid selecting password by default
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "at least 3 characters"]
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, "at least 3 characters"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "capacity must be at least 1"]
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['car', 'motorcycle', 'auto']
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

// Instance method for generating JWT
CaptainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

// Instance method for comparing passwords
CaptainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static method for hashing passwords
CaptainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// Create the Captain model
const CaptainModel = mongoose.model('Captain', CaptainSchema);

module.exports = CaptainModel;
