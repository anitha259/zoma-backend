const express = require('express');

const route = express.Router();

const LocationController = require('../Controllers/Locations');
const MealTypesController = require('../Controllers/MealTypes');
const restaurantController = require('../Controllers/Restaurants');
const userController = require('../Controllers/Users');
const menuItemsController = require('../Controllers/MenuItems');
const ordersController = require('../Controllers/Orders');
const paymentGatewayController = require('../Controllers/Payments');

route.get('/Locations',LocationController.getLocations);
route.get('/MealTypes', MealTypesController.getMealTypes);
route.get('/restaurants/:locId', restaurantController.getRestaurantsByLocation);
route.post('/login', userController.userLogin);
route.post('/signup', userController.userSignUp);
route.post('/filter', restaurantController.restaurantFilter);
route.get('/restaurant/:resId', restaurantController.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/order', ordersController.saveOrderDetails);
route.get('/orders/:userId', ordersController.getOrdersByUserId);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);

module.exports = route;