var express = require('express')
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

//set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//link contoller
var router = require("./controllers/burgers_controllers.js");
app.use('/', router);

//starts the server to began listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
