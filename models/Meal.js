const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
    },
    carbs: {
        type: Number,
    },
    fat: {
        type: Number,
    },
    price: {
        type: Number
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
}, { timestamps: true })

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal