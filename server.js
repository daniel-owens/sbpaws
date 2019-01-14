// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require('handlebars');
var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var seeder = require('./seeder')

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ 
  defaultLayout: "main",
  layoutsDir   : 'views/layouts',
  partialsDir  : 'views/partials'
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var apiRoutes = require("./routes/api-routes.js");

app.use(apiRoutes);

// Not using following files - using controller-based routing instead
// // Routes
// // =============================================================
// require("./routes/api-routes.js")(app);
var htmlRoutes = require("./routes/html-routes.js");
app.use('/', htmlRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize
  .sync({force: true})
  .then(function() {
    return seeder.seed(db)
  })
  .then(function() {
    app.listen(PORT, function() {
      console.log("App now listening on port:", PORT);
    });
  });
