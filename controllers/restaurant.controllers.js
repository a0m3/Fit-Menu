const router = require("express").Router()

const Restaurant = require('../models/Restaurant')


// Show all restaurants
router.get('/', async(req,res)=>{
const allRestaurants = await Restaurant.find()
res.render('restaurants/all-restaurants.ejs', {restaurants: allRestaurants})
})

// Add new restaurant form
router.get('/new-restaurant', (req,res)=>{
    res.render('restaurants/new-restaurant.ejs')
})

router.post('/', async(req,res)=>{
    await Restaurant.create(req.body)
    res.redirect ('/restaurants')
})

module.exports = router;