// Import express and express module Router, as well as the burger js
// data models
const express = require("express");
const router = express.Router();
const db = require("../models");

  router.get("/", function(req, res) {
    // Route for the main index of the site
    db.Customer.findAll({
        // Find all customers from the database using Sequelize ORM
        include: [
            {model: db.Burger, required: false}
        ]
    }).then(function (data) {
        var hbsObject = {
            customers: data
        };
        // Render all customer objects to the index template
        res.render('index', hbsObject);
    });
  });

  router.get("/customers/:id", function(req, res) {
    // Route for the customer page
    db.Customer.findOne({
        // Find the customer in the database based on the ID of the customer
        // in the database
        where: {
          id: req.params.id
        },
        include: [db.Burger]
      }).then(function(data) {
        var hbsObject = {
            customer: data,
            burgers: data.Burgers
        };
        // Render customer and customer's burgers to the customer template
        res.render('customer', hbsObject);
      });
  });

// Export routes for server.js to use.
module.exports = router;
