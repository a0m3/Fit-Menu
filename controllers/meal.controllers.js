const router = require("express").Router()
const isAdmin = require("../middleware/is-admin")
const isSignedIn = require("../middleware/is-signed-in")
const Meal = require('../models/Meal')
const Restaurant = require('../models/Restaurant')

// Show all meals of specific restaurant
router.get('/', async (req, res) => {
    const allMeals = await Meal.find()
    res.render('meals/all-meals.ejs', { meals: allMeals })
})

// Add new restaurant form
router.get('/restaurants/:restaurantId/meals/new', isSignedIn, async (req, res) => {
    const foundRestaurant = await Restaurant.findById(req.params.restaurantId)
    res.render('meals/new-meal.ejs', {
        restaurant: foundRestaurant
    })
})

router.post('/restaurants/:restaurantId/meals', isSignedIn, async (req, res) => {
    req.body.restaurant = req.params.restaurantId
    await Meal.create(req.body)
    res.redirect(`/restaurants/${req.params.restaurantId}`)
})

module.exports = router;