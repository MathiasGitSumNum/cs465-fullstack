var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');

/* GET home page. */
router.get('/', /*function(req, res, next)*/ controller.travel);
  /*res.render('index', { title: 'Express' });*/

module.exports = router;