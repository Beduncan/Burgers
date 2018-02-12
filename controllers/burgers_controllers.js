//import express and burgers.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js'); 
//create route the delfault to the index page. index redirected route.get
// create route to home page or index page render burgers. route.get
//create a route to create bugers route.post
//delete route. this will be a route as well
//export 
router.get("/", function (req, res) {
	res.redirect('/index');
});
 	
module.exports = router;