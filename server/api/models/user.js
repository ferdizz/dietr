// Load required packages
const mongoose = require('mongoose')

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  weight: Number
});

// Export the user model
module.exports = mongoose.model('User', userSchema);
