const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user','admin'],
    default: 'user',
    required: true
  },
  favoriteRestaurants:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  favoriteMeals:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meal'
  }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;
