// Load required packages
const mongoose = require('mongoose');

const Meal = require('./meal');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    weight: Number,
    height: Number,
    meals: [Meal.schema]
});

// Export the user model
module.exports = mongoose.model('User', userSchema);
