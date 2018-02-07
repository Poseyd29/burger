var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the appliburgerion directory.
app.use(express.static("public"));

// parse appliburgerion/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse appliburgerion/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});