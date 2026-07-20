const router = require("express").Router()
const isAdmin = require('../middleware/is-admin')
const Restaurant = require('../models/Restaurant')
const Meal = require('../models/Meal')
const isSignedIn = require("../middleware/is-signed-in")

// Show all restaurants
router.get('/', async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find()
        res.render('restaurants/all-restaurants.ejs', { restaurants: allRestaurants })
    }
    catch (err) {
        console.log(err)
    }
})

// Add new restaurant form
router.get('/new', isSignedIn, isAdmin, (req, res) => {
    try {
        res.render('restaurants/new-restaurant.ejs')
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', isSignedIn, isAdmin, async (req, res) => {
    try {
        await Restaurant.create(req.body)
        res.redirect('/restaurants')
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/:restaurantId', async (req, res) => {
    try {
        const foundRestaurant = await Restaurant.findById(req.params.restaurantId)

        const restaurantMeals = await Meal.find({
            restaurant: req.params.restaurantId
        })

        res.render('restaurants/restaurant-details.ejs', {
            restaurant: foundRestaurant,
            meals: restaurantMeals
        })
    }
    catch (err) {
        console.log(err)
    }
})

//edit restaurant (GET)
router.get('/:restaurantId/edit', isSignedIn, isAdmin, async (req, res) => {
    try {
        const foundRestaurant = await Restaurant.findById(req.params.restaurantId)
        res.render('restaurants/edit-restaurant.ejs', { restaurant: foundRestaurant })
    }
    catch (err) {
        console.log(err)
    }
})

router.put('/:restaurantId', isSignedIn, isAdmin, async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true })
        res.redirect(`/restaurants/${req.params.restaurantId}`);
    }
    catch (err) {
        console.log(err)
    }
})

//Delete restaurant
router.delete('/:restaurantId', async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.restaurantId)
        res.redirect('/restaurants')
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router;