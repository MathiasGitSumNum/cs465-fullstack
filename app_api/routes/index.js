const express = require('express');
const router = express.Router();

//import of controllers to route
const tripsController = require('../controllers/trips');

//define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);
    
module.exports = router;