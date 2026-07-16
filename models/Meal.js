const mongoose = require('mongoose')

const mealSchema = new mongoose.Schema({

}, { timestamps: true })

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal