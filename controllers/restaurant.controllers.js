const router = require("express").Router()
const isAdmin = require('../middleware/is-admin')
const Restaurant = require('../models/Restaurant')
const Meal = require('../models/Meal')
const isSignedIn = require("../middleware/is-signed-in")

// Show all restaurants
router.get('/', async(req,res)=>{
const allRestaurants = await Restaurant.find()
res.render('restaurants/all-restaurants.ejs', {restaurants: allRestaurants})
})

// Add new restaurant form
router.get('/new', isSignedIn, isAdmin, (req,res)=>{
    res.render('restaurants/new-restaurant.ejs')
})

router.post('/', isSignedIn, isAdmin, async(req,res)=>{
    await Restaurant.create(req.body)
    res.redirect ('/restaurants')
})

router.get('/:restaurantId', async (req, res) => {
    const foundRestaurant = await Restaurant.findById(req.params.restaurantId)

    const restaurantMeals = await Meal.find({
        restaurant: req.params.restaurantId
    })

    res.render('restaurants/restaurant-details.ejs', {
        restaurant: foundRestaurant,
        meals: restaurantMeals
    })
})

module.exports = router;