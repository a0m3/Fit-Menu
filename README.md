# FitMenu

## Overview

**FitMenu** is an application that helps users discover the nutritional information of meals served by restaurants in Bahrain. Users can browse restaurants, explore meal options, and view calories and macronutrients (protein, carbohydrates, and fat) to make healthier food choices based on their fitness goals.

---

## Screenshots

- Home Page (Best Offers For Today)
- All Restaurants
- Restaurant Details
- Meal Details
- Add Meal
- Sign Up / Sign In
- My Favorites
- Admin Dashboard
- 404 Page

---

## Technologies Used

### Frontend
- HTML
- CSS
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other
- Express Session
- bcrypt
- Morgan
- dotenv

---

## Getting Started

FitMenu allows users to:

- Create an account
- Log in securely
- Browse restaurants
- View meal nutritional information (calories, protein, carbs, fat)
- Add, edit, and delete restaurants and meals (admin only)
- Save favorite restaurants and favorite meals
- Toggle between dark mode and light mode

---

## Installation



---


## User Stories

### Visitor
- As a visitor, I want to browse restaurants.
- As a visitor, I want to view restaurant details.
- As a visitor, I want to browse the meals offered by a restaurant.
- As a visitor, I want to see calories and macronutrients for each meal.
- As a visitor, I want to see today's cheapest meals on the homepage.

### Registered User
- As a user, I want to create an account.
- As a user, I want to log in.
- As a user, I want to log out.
- As a user, I want to save my favorite restaurants.
- As a user, I want to save my favorite meals.
- As a user, I want to view my favorite restaurants and meals separately.

### Admin
- As an admin, I want to add restaurants.
- As an admin, I want to update restaurant information.
- As an admin, I want to remove restaurants.
- As an admin, I want to add meals to a restaurant.
- As an admin, I want to edit meal information.
- As an admin, I want to delete meals.
- As an admin, I want to view a dashboard with restaurant and meal counts.

---

## Database Design

### User

- username
- email
- password (hashed, minimum 6 characters)
- role (`user` or `admin`)
- favoriteRestaurants (array of Restaurant references)
- favoriteMeals (array of Meal references)

### Restaurant

- name
- logo
- description

### Meal

- name
- image
- calories
- protein
- carbs
- fat
- price
- restaurant (reference to Restaurant)

---

## Routes

### Authentication

| Method | Route | Description |
|---------|-------|-------------|
| GET | /auth/sign-up | Display sign up form |
| POST | /auth/sign-up | Create a new user |
| GET | /auth/sign-in | Display sign in form |
| POST | /auth/sign-in | Authenticate user |
| GET | /auth/sign-out | Log out user |

### Restaurants

| Method | Route | Description |
|---------|-------|-------------|
| GET | /restaurants | Display all restaurants |
| GET | /restaurants/new | Display new restaurant form (admin) |
| POST | /restaurants | Create a restaurant (admin) |
| GET | /restaurants/:restaurantId | Display restaurant details and its meals |
| GET | /restaurants/:restaurantId/edit | Display edit form (admin) |
| PUT | /restaurants/:restaurantId | Update restaurant (admin) |
| DELETE | /restaurants/:restaurantId | Delete restaurant and its meals (admin) |

### Meals

| Method | Route | Description |
|---------|-------|-------------|
| GET | / | Homepage with today's cheapest meal offers |
| GET | /restaurants/:restaurantId/meals/new | Display new meal form (admin) |
| POST | /restaurants/:restaurantId/meals | Create a meal for a restaurant (admin) |
| GET | /meals/:mealId | Display meal details |
| GET | /meals/:mealId/edit | Display edit form (admin) |
| PUT | /meals/:mealId/edit | Update meal (admin) |
| DELETE | /meals/:mealId | Delete meal (admin) |

### Favorites

| Method | Route | Description |
|---------|-------|-------------|
| GET | /favorites | Display favorite restaurants and favorite meals |
| POST | /restaurants/:restaurantId/favorite | Add/remove a restaurant from favorites |
| POST | /meals/:mealId/favorite | Add/remove a meal from favorites |

### Admin

| Method | Route | Description |
|---------|-------|-------------|
| GET | /admin | Admin dashboard (restaurant and meal counts) |
| GET | /admin/restaurants | Admin view of all restaurants |

---

## Features

- User authentication (sign up, sign in, sign out)
- Role-based access control (user vs. admin)
- Full CRUD functionality for restaurants (admin)
- Full CRUD functionality for meals (admin)
- Nutrition information (calories, protein, carbs, fat)
- Favorite restaurants and favorite meals, viewable as separate tabs
- Homepage "Best Offers For Today" — random low-cost meals pulled from different restaurants
- Admin dashboard with restaurant/meal counts
- Dark mode / light mode toggle
- Confirmation popup before deleting a meal or restaurant
- Custom 404 page
- Responsive card-based layout for restaurants and meals

---

## Future Enhancements

- Meal and restaurant search
- AI food recognition from images
- Barcode scanner
- Daily calorie tracker
- Personalized calorie calculator
- Meal recommendations based on fitness goals
- Restaurant ratings and reviews
- Nutrition charts
- Mobile application

---

## Credits

- Restaurant names are based on real establishments in Bahrain; nutritional values are estimated for demonstration purposes and are not sourced from official restaurant data.
