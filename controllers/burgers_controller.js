// Import express and express module Router, as well as the burger js
// data models
const express = require("express");
const router = express.Router();
const db = require("../models");

  router.get("/api/burgers", function(req, res) {
    // API Route for getting all burgers for a specific customer
    var query = {};
    if (req.query.customer_id) {
      query.CustomerId = req.query.customer_id;
    }
    db.Burger.findAll({
      where: query,
      include: [db.Customer]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  router.get("/api/burgers/:id", function(req, res) {
    // API route for getting burger object of a specific burger with ID 
    db.Burger.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Customer]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  router.post("/api/burgers", function(req, res) {
    // API route for making a new burger entry in the database
    db.Burger.create(req.body).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    // API route for updating a burger entry in the database
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    // API route for deleting a burger in the database
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

// Export routes for server.js to use.
module.exports = router;
