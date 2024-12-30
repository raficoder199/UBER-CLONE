const mongoose = require('mongoose');

const jwtBlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true, // Ensure tokens are unique
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400, // TTL index (24 hours = 86400 seconds)
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const JWTBlacklist = mongoose.model('JWTBlacklist', jwtBlacklistSchema);

module.exports = JWTBlacklist;
