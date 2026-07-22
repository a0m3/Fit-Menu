const router = require("express").Router()
const isAdmin = require('../middleware/is-admin')
const Restaurant = require('../models/Restaurant')
const Meal = require('../models/Meal')
const isSignedIn = require("../middleware/is-signed-in")
const User = require('../models/User')

router.get('/', async (req, res) => {
    try {
        const allRestaurants = await Restaurant.find()
        res.render('restaurants/all-restaurants.ejs', { restaurants: allRestaurants })
    }
    catch (err) {
        console.log(err)
    }
})

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
        let isFavorited = false
        if (req.session.user) {
            const foundUser = await User.findById(req.session.user._id)
            isFavorited = foundUser.favoriteRestaurants.includes(req.params.restaurantId)
        }

        res.render('restaurants/restaurant-details.ejs', {
            restaurant: foundRestaurant,
            meals: restaurantMeals,
            isFavorited: isFavorited
        })
    }
    catch (err) {
        console.log(err)
    }
})



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


router.delete("/:restaurantId", isSignedIn, isAdmin, async (req, res) => {
    try {
        await Meal.deleteMany({
            restaurant: req.params.restaurantId
        })
        await Restaurant.findByIdAndDelete(req.params.restaurantId)
        res.redirect("/restaurants")
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;