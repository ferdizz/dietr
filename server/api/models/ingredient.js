// Load required packages
const mongoose = require('mongoose');

const Food = require('./food');

// Define the ingredient schema
const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    food: Food.schema,
    amount: {
        type: Number
    }
});

// Export the ingredient model
module.exports = mongoose.model('Ingredient', ingredientSchema);
