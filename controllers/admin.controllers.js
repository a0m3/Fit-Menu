const router = require("express").Router();
const Restaurant = require("../models/Restaurant");
const Meal = require("../models/Meal");
const isSignedIn = require("../middleware/is-signed-in");
const isAdmin = require("../middleware/is-admin");

router.get("/", isSignedIn, isAdmin, async (req, res) => {
try{
    const restaurantCount = await Restaurant.countDocuments()
    const mealCount = await Meal.countDocuments()

    res.render("admin/dashboard.ejs", {
        restaurantCount,
        mealCount
    });
}
catch(err){
    console.log(err)
}
})

router.get("/restaurants", isSignedIn, isAdmin, async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.render("admin/restaurant.admin.ejs", {
            restaurants
        });
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;