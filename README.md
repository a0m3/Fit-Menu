# FitMenu

## Overview

**FitMenu** is an application that helps users discover the nutritional information of meals served by restaurants in Bahrain. Users can browse restaurants, explore meal options, and view calories and macronutrients (protein, carbohydrates, and fat) to make healthier food choices based on their fitness goals.

---

## Screenshots

- Home Page
- Restaurants Page
- Restaurant Details
- Meal Details
- Add Meal
- User Dashboard

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
- View meal nutritional information
- Add new meals
- Edit and delete meals they created
- Save favorite meals (optional)

---

## Installation



---

## User Stories

### Visitor
- As a visitor, I want to browse restaurants.
- As a visitor, I want to view restaurant details.
- As a visitor, I want to browse meals.
- As a visitor, I want to see calories and macronutrients.
- As a visitor, I want to search for meals or restaurants.

### Registered User
- As a user, I want to create an account.
- As a user, I want to log in.
- As a user, I want to log out
- As a user, I want to save my favorite meals.

### Admin
- As an admin, I want to add restaurants.
- As an admin, I want to update restaurant information.
- As an admin, I want to remove restaurants.
- As an admin, I want to add meals.
- As an admin, I want to edit meal information.
- As an admin, I want to delete meals.

---

## Database Design

### User

- username
- email
- password (hashed)
- role
- favorites

### Restaurant

- name
- logo

### Meal

- name
- image
- calories
- protein
- carbs
- fat
- price
- restaurant

---

## Routes

### Authentication

| Method | Route | Description |
|---------|-------|-------------|
| GET | /signup | Display signup form |
| POST | /signup | Create a new user |
| GET | /login | Display login form |
| POST | /login | Authenticate user |
| GET | /logout | Log out user |

### Restaurants

| Method | Route | Description |
|---------|-------|-------------|
| GET | /restaurants | Display all restaurants |
| GET | /restaurants/new | Display new restaurant form |
| POST | /restaurants | Create a restaurant |
| GET | /restaurants/:id | Display restaurant details |
| GET | /restaurants/:id/edit | Display edit form |
| PUT | /restaurants/:id | Update restaurant |
| DELETE | /restaurants/:id | Delete restaurant |

### Meals

| Method | Route | Description |
|---------|-------|-------------|
| GET | /meals | Display all meals |
| GET | /meals/new | Display new meal form |
| POST | /meals | Create a meal |
| GET | /meals/:id | Display meal details |
| GET | /meals/:id/edit | Display edit form |
| PUT | /meals/:id | Update meal |
| DELETE | /meals/:id | Delete meal |

---

## Features

- User authentication
- Full CRUD functionality for meals
- Full CRUD functionality for restaurants
- Nutrition information (Calories, Protein, Carbs, Fat)
- Responsive design
- Meal search
- Restaurant pages
- Image support

---

## Future Enhancements

- AI food recognition from images
- Barcode scanner
- Daily calorie tracker
- Personalized calorie calculator
- Meal recommendations based on goals
- Restaurant ratings and reviews
- Nutrition charts
- Admin dashboard
- Mobile application

---

## Credits

- Nutrition information collected from restaurant websites and publicly available nutritional data.
