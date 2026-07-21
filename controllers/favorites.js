const express = require('express')
const router = express.Router()

const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Meal = require('../models/Meal')


router.get('/favorites', async (req,res)=>{

    const user = await User.findById(req.session.user._id)
        .populate('favoriteRestaurants')
        .populate('favoriteMeals')


    res.render('favorites/myFavorites.ejs',{
        restaurants: user.favoriteRestaurants,
        meals: user.favoriteMeals
    })
})


module.exports = router