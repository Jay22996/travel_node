var express = require('express');
var router = express.Router();
let userController = require('../controller/userController')
let showController = require('../controller/show_controller');

/* GET users listing. */
router.post('/signup', userController.Signup);
router.post('/login', userController.Login);

router.post('/adduser_cart/:id', showController.add_destination);
router.post('/add_place', showController.add_places);
router.post('/add_hotel', showController.add_hotels);
router.post('/add_activity', showController.add_activities);

module.exports = router;
