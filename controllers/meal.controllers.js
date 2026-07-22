const router = require("express").Router()
const isAdmin = require("../middleware/is-admin")
const isSignedIn = require("../middleware/is-signed-in")
const Meal = require('../models/Meal')
const Restaurant = require('../models/Restaurant')
const User = require('../models/User')


router.get('/meals/:mealId/', async (req, res) => {
    try {
        const foundMeal = await Meal.findById(req.params.mealId).populate("restaurant")
        let isFavorited = false
        if (req.session.user) {
            const foundUser = await User.findById(req.session.user._id)
            isFavorited = foundUser.favoriteMeals.includes(req.params.mealId)
        }
        res.render('meals/meal-details.ejs', { meal: foundMeal, isFavorited: isFavorited })
    }
    catch (err) {
        console.log(err)
    }
})



router.get('/restaurants/:restaurantId/meals/new', isSignedIn, isAdmin, async (req, res) => {
    try {
        const foundRestaurant = await Restaurant.findById(req.params.restaurantId)
        res.render('meals/new-meal.ejs', {
            restaurant: foundRestaurant
        })
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/restaurants/:restaurantId/meals', isSignedIn, isAdmin, async (req, res) => {
    try {
        req.body.restaurant = req.params.restaurantId
        await Meal.create(req.body)
        res.redirect(`/restaurants/${req.params.restaurantId}`)
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/', async (req, res) => {
    try {
        const cheapMeals = await Meal.aggregate([
            { $sort: { price: 1 } },
            { $limit: 20 },
            { $sample: { size: 4 } }
        ])

        await Meal.populate(cheapMeals, { path: 'restaurant' })

        res.render('homepage.ejs', { offers: cheapMeals })
    }
    catch (err) {
        console.log(err)
    }
})


router.get('/meals/:mealId/edit', async (req, res) => {
    try {
        const foundMeal = await Meal.findById(req.params.mealId)
        console.log(foundMeal)
        res.render('meals/edit-meals.ejs', { meal: foundMeal })
    }
    catch (err) {
        console.log(err)
    }
})

router.put('/meals/:mealId/edit', isSignedIn, isAdmin, async (req, res) => {
    try {
        const updatedMeal = await Meal.findByIdAndUpdate(req.params.mealId, req.body, { new: true })
        res.redirect(`/meals/${req.params.mealId}`);
    }
    catch (err) {
        console.log(err)
    }
})

router.delete('/meals/:mealId', isSignedIn, isAdmin, async (req, res) => {
    try {
        const foundMeal = await Meal.findById(req.params.mealId)

        if (!foundMeal) {
            return res.redirect('/restaurants')
        }

        const restaurantId = foundMeal.restaurant

        await Meal.findByIdAndDelete(req.params.mealId)

        res.redirect(`/restaurants/${restaurantId}`)
    } catch (err) {
        console.log(err)
    }
})


module.exports = router