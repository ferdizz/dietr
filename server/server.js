// Import required modules and files
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const config = require("./config");
const express = require("express");
const logger = require("morgan");

// Express setup
const app = express();

//Bodyparser setup
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Log requests to console
app.use(logger("dev"));

// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );

    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, GET, POST, DELETE, OPTIONS"
        );
        return res.status(200).json({});
    }

    // res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Import and setup routes
const userRoutes = require("./api/routes/user");
const foodRoutes = require("./api/routes/food");
app.use("/users", userRoutes);
app.use("/foods", foodRoutes);

// Custom error handling
app.use((req, res, next) => {
    // res.status(404).send('Not found');
    if (req.originalUrl === "/favicon.ico") {
        return res.status(404);
    }
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    // console.log(req.originalUrl)
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Connect to mongodb
mongoose.Promise = bluebird;
mongoose
    .connect(
        config.db_uri,
        {
            useMongoClient: true
        }
    )
    .then(
        () => {
            // DB connection successful, start server
            app.listen(config.port, () => {
                console.log(
                    "Server up and running on port " + config.port + "."
                );
            });
        },
        err => {
            return console.error(err);
        }
    );
