const express = require('express');
const router = express.Router();
var { expressjwt: jwt } = require("express-jwt");
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"],
});

//import of controllers to route
const authController = require('../controllers/authentication');
//'../controllers/authentication'
const tripsController = require('../controllers/trips');

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);
    
module.exports = router;

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);
