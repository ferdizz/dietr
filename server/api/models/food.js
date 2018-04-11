// Load required packages
const mongoose = require('mongoose')

// Define the food schema
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nutrients: mongoose.Schema.Types.Mixed
}, { strict: false });

// Export the food model
module.exports = mongoose.model('Food', foodSchema);
