const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true })

const Restaurant = mongoose.model("Restaurant", restaurantSchema)
module.exports = Restaurant