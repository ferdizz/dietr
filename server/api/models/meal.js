// Load required packages
const mongoose = require('mongoose');

const Ingredient = require('./ingredient');

// Define the meal schema
const mealSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // logged: {
    //     type: Date
    // },
    ingredients: [Ingredient.schema]
});

// Export the meal model
module.exports = mongoose.model('Meal', mealSchema);
