// Import all dependencies for app
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");

// Initialize express and define port number
const app = express();
const PORT = process.env.PORT || 3000;

// BodyParser for JSON data handling by express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content to clients from public folder
app.use(express.static("public"));

// Handlebars configuration
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes from the controllers folder
var burgerRoutes = require("./controllers/burgers_controller.js");
var customerRoutes = require("./controllers/customers_controller.js");
var mainRoutes = require("./controllers/main_controller.js");
app.use(burgerRoutes);
app.use(customerRoutes);
app.use(mainRoutes);

const db = require("./models");

// Run application with port and console status.
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});