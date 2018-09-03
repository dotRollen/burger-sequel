const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/customers", function(req, res) {
  // API Route for all customer object data from database
  db.Customer.findAll({
    include: [db.Burger]
  }).then(function(dbCustomer) {
    res.json(dbCustomer);
  });
});

router.get("/api/customers/:id", function(req, res) {
  // API route for a single customer object data based on the ID from database
  db.Customer.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Burger]
  }).then(function(dbCustomer) {
    res.json(dbCustomer);
  });
});

router.post("/api/customers", function(req, res) {
  // API route for creating a new customer 
  db.Customer.create(req.body).then(function(dbCustomer) {
    res.json(dbCustomer);
  });
});

router.delete("/api/customers/:id", function(req, res) {
  // API route for deleting a customer
  db.Customer.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbCustomer) {
    res.json(dbCustomer);
  });
});

// Export routes for server.js to use.
module.exports = router;

