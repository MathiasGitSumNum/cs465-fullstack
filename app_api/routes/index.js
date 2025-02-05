const express = require('express');
const router = express.Router();

//import of controllers to route
const tripsController = require('../controllers/trips');

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);
    
module.exports = router;