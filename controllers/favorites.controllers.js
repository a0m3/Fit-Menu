const express = require('express')
const router = express.Router()
const isSignedIn = require("../middleware/is-signed-in")
const User = require('../models/User')
const Restaurant = require('../models/Restaurant')
const Meal = require('../models/Meal')



router.get('/favorites', isSignedIn, async (req, res) => {
    try {
        const foundUser = await User.findById(req.session.user._id)
            .populate('favoriteRestaurants')
            .populate('favoriteMeals')

        res.render('favorites/myFavorites.ejs', {
            restaurants: foundUser.favoriteRestaurants,
            meals: foundUser.favoriteMeals
        })
    }
    catch (err) {
        console.log(err)
    }
})


router.post('/restaurants/:restaurantId/favorite', isSignedIn, async (req, res) => {
    try {
        const foundUser = await User.findById(req.session.user._id)
        if (foundUser.favoriteRestaurants.includes(req.params.restaurantId)) {
            foundUser.favoriteRestaurants.pull(req.params.restaurantId)
        } else {
            foundUser.favoriteRestaurants.push(req.params.restaurantId)
        }
        await foundUser.save()
        res.redirect(`/restaurants/${req.params.restaurantId}`)
    }
    catch (err) {
        console.log(err)
    }
})



router.post('/meals/:mealId/favorite', isSignedIn, async (req, res) => {
    try {
        const foundUser = await User.findById(req.session.user._id)

        if (foundUser.favoriteMeals.includes(req.params.mealId)) {
            foundUser.favoriteMeals.pull(req.params.mealId)
        } else {
            foundUser.favoriteMeals.push(req.params.mealId)
        }

        await foundUser.save()
        res.redirect(`/meals/${req.params.mealId}`)
    }
    catch (err) {
        console.log(err)
    }
})


module.exports = router