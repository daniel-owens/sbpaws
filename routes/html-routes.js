// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var models  = require('../models');
var express = require('express');
var router  = express.Router();
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
router.get("/", function(req, res) {
   res.render("index");
});

router.get("/dogs", function(req, res) {
  models.dog.findAll({
    // where: {
    //   adopted: false
    // }
  }).then(function(dogs) {
    var hbsObject = {
      dogs: dogs
    };
    console.log(hbsObject);
    res.render("dogs", hbsObject);
  });
});
// router.get("/dogs/:id", function(req, res) {
 
// });
router.get("/dogs/addnewdog", function(req, res) {
  res.render("addnewdog");
});

router.get("/adopt", function(req, res) {
  res.render("adopt");
});

router.get("/application", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/application.html"));
});

// router.post("/adopt/application", function(req, res) {
// });

router.get("/help", function(req, res) {
      res.sendFile(path.join(__dirname, "../help.html"));
});
// router.post("/help/donate", function(req, res) {

// });
 module.exports = router;