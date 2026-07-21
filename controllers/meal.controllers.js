const router = require("express").Router()
const isAdmin = require("../middleware/is-admin")
const isSignedIn = require("../middleware/is-signed-in")
const Meal = require('../models/Meal')
const Restaurant = require('../models/Restaurant')



// Show meal details
router.get('/meals/:mealId/', async (req, res) => {
    try {
            const foundMeal = await Meal.findById(req.params.mealId)

            res.render('meals/meal-details.ejs', {meal: foundMeal})
        }
    catch (err) {
        console.log(err)
    }
})


// Add new restaurant form
router.get('/restaurants/:restaurantId/meals/new', isSignedIn, isAdmin, async (req, res) => {
    const foundRestaurant = await Restaurant.findById(req.params.restaurantId)
    res.render('meals/new-meal.ejs', {
        restaurant: foundRestaurant
    })
})

router.post('/restaurants/:restaurantId/meals', isSignedIn, isAdmin, async (req, res) => {
    req.body.restaurant = req.params.restaurantId
    await Meal.create(req.body)
    res.redirect(`/restaurants/${req.params.restaurantId}`)
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
        const foundMeal = await Meal.findById(req.params.mealId);

        if (!foundMeal) {
            return res.redirect('/restaurants');
        }

        const restaurantId = foundMeal.restaurant;

        await Meal.findByIdAndDelete(req.params.mealId);

        res.redirect(`/restaurants/${restaurantId}`);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;